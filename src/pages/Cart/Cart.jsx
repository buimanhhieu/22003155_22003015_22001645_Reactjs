import React, { useEffect, useState } from "react"
import Checkbox from "src/components/Checkbox/Checkbox"
import * as S from "./cart.style"
import { useDispatch, useSelector } from "react-redux"
import ProductQuantityController from "src/components/ProductQuantityController/ProductQuantityController"
import { createNextState, unwrapResult } from "@reduxjs/toolkit"
import {
  buyPurchase,
  deletePurchase,
  getCartPurchases,
  updatePurchase
} from "./cart.slice.jsx"
import keyBy from "lodash/keyBy"
import { toast } from "react-toastify"
import { Helmet } from "react-helmet-async"

function Cart() {
  const purchases = useSelector(state => state.cart.purchases)

  const [localPurchases, setLocalPurchases] = useState(() =>
    createNextState(purchases, draft =>
      draft.forEach(purchase => {
        purchase.disabled = false
        purchase.checked = false
      })
    )
  )

  const dispatch = useDispatch()

  const isCheckedAll = localPurchases.every(purchase => purchase.checked)
  const checkedPurchases = localPurchases.filter(purchase => purchase.checked)
  const totalCheckedPurchases = checkedPurchases.length

  const totalCheckedPurchasePrice = checkedPurchases.reduce(
    (reusult, current) => {
      return reusult + current.product.price * current.buy_count
    },
    0
  )

  const totalCheckedPurchaseSavingPrice = checkedPurchases.reduce(
    (reusult, current) => {
      return (
        reusult +
        (current.product.price_before_discount - current.product.price) *
          current.buy_count
      )
    },
    0
  )

  useEffect(() => {
    setLocalPurchases(localPurchases => {
      const localPurchasesObject = keyBy(localPurchases, "_id")

      return createNextState(purchases, draft => {
        draft.forEach(purchase => {
          purchase.disabled = false
          purchase.checked = Boolean(
            localPurchasesObject[purchase._id]?.checked
          )
        })
      })
    })
  }, [purchases])

  const handleInputQuantity = indexPurchase => value => {
    const newLocalPurchases = createNextState(localPurchases, draft => {
      draft[indexPurchase].buy_count = value
    })
    setLocalPurchases(newLocalPurchases)
  }

  const handleBlurQuantity = indexPurchase => async value => {
    const purchase = localPurchases[indexPurchase]
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = true
      })
    )
    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = false
      })
    )
  }

  const handleIncreaseAndDecrease = indexPurchase => async value => {
    const purchase = localPurchases[indexPurchase]
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = true
        draft[indexPurchase].buy_count = value
      })
    )
    await dispatch(
      updatePurchase({
        product_id: purchase.product._id,
        buy_count: value
      })
    ).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].disabled = false
      })
    )
  }

  const handleCheck = indexPurchase => value => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft => {
        draft[indexPurchase].checked = value
      })
    )
  }

  const handleCheckAll = () => {
    setLocalPurchases(localPurchases =>
      createNextState(localPurchases, draft =>
        draft.forEach(purchase => {
          purchase.checked = !isCheckedAll
        })
      )
    )
  }

  const handleRemove = indexPurchase => async () => {
    const purchase_id = localPurchases[indexPurchase]._id
    await dispatch(deletePurchase([purchase_id])).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success("Xoá đơn thành công", {
      position: "top-center",
      autoClose: 3000
    })
  }

  const handleRemoveManyPurchases = async () => {
    const purchase_ids = checkedPurchases.map(purchase => purchase._id)
    await dispatch(deletePurchase(purchase_ids)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success("Xoá đơn thành công", {
      position: "top-center",
      autoClose: 3000
    })
  }

  const handleBuyPurchases = async () => {
    if (checkedPurchases.length > 0) {
      const body = checkedPurchases.map(purchase => ({
        product_id: purchase.product._id,
        buy_count: purchase.buy_count
      }))
      await dispatch(buyPurchase(body)).then(unwrapResult)
      await dispatch(getCartPurchases()).then(unwrapResult)
      toast.success("Đặt đơn hàng thành công", {
        position: "top-center",
        autoClose: 3000
      })
    }
  }

  return (
    <div className="container">
      <Helmet>
        <title>Giỏ hàng</title>
      </Helmet>
      <div>
        <S.ProductHeader>
          <S.ProductHeaderCheckbox>
            <Checkbox onChange={handleCheckAll} checked={isCheckedAll} />
          </S.ProductHeaderCheckbox>
          <S.ProductHeaderName>Sản phẩm</S.ProductHeaderName>
          <S.ProductHeaderUnitPrice>Đơn giá</S.ProductHeaderUnitPrice>
          <S.ProductHeaderQuantity>Số lượng</S.ProductHeaderQuantity>
          <S.ProductHeaderTotalPrice>Số tiền</S.ProductHeaderTotalPrice>
          <S.ProductHeaderAction>Thao tác</S.ProductHeaderAction>
        </S.ProductHeader>
        <S.ProductSection>
          {localPurchases.map((purchase, index) => (
            <S.CartItem key={purchase._id}>
              <S.CardItemCheckbox>
                <Checkbox
                  checked={purchase.checked}
                  onChange={handleCheck(index)}
                />
              </S.CardItemCheckbox>
              <S.CartItemOverview>
                <S.CartItemOverviewImage to="">
                  <img src={purchase.product.image} alt="" />
                </S.CartItemOverviewImage>
                <S.CartItemOverviewNameWrapper>
                  <S.CartItemOverviewName to="">
                    {purchase.product.name}
                  </S.CartItemOverviewName>
                </S.CartItemOverviewNameWrapper>
              </S.CartItemOverview>
              <S.CartItemUnitPrice>
                <span>
                  đ{purchase.product.price_before_discount.toLocaleString()}
                </span>
                <span>đ{purchase.product.price.toLocaleString()}</span>
              </S.CartItemUnitPrice>
              <S.CartItemQuantity>
                <ProductQuantityController
                  max={purchase.product.quantity}
                  value={purchase.buy_count}
                  disabled={purchase.disabled}
                  onIncrease={handleIncreaseAndDecrease(index)}
                  onDecrease={handleIncreaseAndDecrease(index)}
                  onInput={handleInputQuantity(index)}
                  onBlur={handleBlurQuantity(index)}
                />
              </S.CartItemQuantity>
              <S.CartItemTotalPrice>
                <span>
                  đ
                  {(
                    purchase.product.price * purchase.buy_count
                  ).toLocaleString()}
                </span>
              </S.CartItemTotalPrice>
              <S.CartItemAction>
                <S.CartItemActionButton onClick={handleRemove(index)}>
                  Xoá
                </S.CartItemActionButton>
              </S.CartItemAction>
            </S.CartItem>
          ))}
        </S.ProductSection>
      </div>
      <S.CartFooter>
        <S.CartFooterCheckbox>
          <Checkbox onChange={handleCheckAll} checked={isCheckedAll} />
        </S.CartFooterCheckbox>
        <S.CartFooterButton onClick={handleCheckAll}>
          Chọn tất cả {purchases.length}
        </S.CartFooterButton>
        <S.CartFooterButton onClick={handleRemoveManyPurchases}>
          Xoá
        </S.CartFooterButton>
        <S.CartFooterSpaceBetween />
        <S.CartFooterPrice>
          <S.CartFooterPriceTop>
            <div>Tổng thanh toán ({totalCheckedPurchases} sản phẩm): </div>
            <div>đ{totalCheckedPurchasePrice.toLocaleString()}</div>
          </S.CartFooterPriceTop>
          <S.CartFooterPriceBot>
            <div>Tiết kiệm</div>
            <div>đ{totalCheckedPurchaseSavingPrice.toLocaleString()}</div>
          </S.CartFooterPriceBot>
        </S.CartFooterPrice>
        <S.CartFooterCheckout onClick={handleBuyPurchases}>
          Mua hàng
        </S.CartFooterCheckout>
      </S.CartFooter>
    </div>
  )
}

export default Cart
