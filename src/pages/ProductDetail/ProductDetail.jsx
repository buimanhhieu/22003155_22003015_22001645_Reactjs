import React, { useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { unwrapResult } from "@reduxjs/toolkit"
import DOMPurify from "dompurify"
import ProductQuantityController from "src/components/ProductQuantityController/ProductQuantityController"
import ProductRating from "src/components/ProductRating/ProductRating"
import { SalePercent } from "src/utils/helper"
import { getProductDetail, addToCart } from "./productDetail.slice"
import { getCartPurchases } from "../Cart/cart.slice"
import { toast } from "react-toastify"
import { Helmet } from "react-helmet-async"
import * as S from "./productDetail.style"

function ProductDetail() {
  const [product, setProduct] = useState({})
  const [currentImage, setCurrentImage] = useState({})
  const [currentIndexImages, setCurrentIndexImages] = useState([0, 5])
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const { idProduct: rawSlug = "" } = useParams()
  const decoded = decodeURIComponent(rawSlug)
  const realId = decoded.includes("-i.") ? decoded.split("-i.").pop() : decoded

  const currentImages = useMemo(() => {
    return Array.isArray(product.images)
      ? product.images.slice(...currentIndexImages)
      : []
  }, [product.images, currentIndexImages])

  useEffect(() => {
    if (!realId) return

    dispatch(getProductDetail(realId))
      .then(unwrapResult)
      .then(res => {
        const data = res.data
        const imgs = Array.isArray(data.images)
          ? data.images.map((url, idx) => ({ url, id: idx }))
          : []
        setProduct({ ...data, images: imgs })
        if (imgs.length) setCurrentImage(imgs[0])
      })
      .catch(err => {
        console.error("Lấy chi tiết sản phẩm lỗi:", err)
      })
  }, [dispatch, realId])

  const chooseCurrentImage = img => setCurrentImage(img)

  const choosePrev = () => {
    if (currentIndexImages[0] > 0) {
      setCurrentIndexImages(([start, end]) => [start - 1, end - 1])
    }
  }

  const chooseNext = () => {
    if (
      Array.isArray(product.images) &&
      currentIndexImages[1] < product.images.length
    ) {
      setCurrentIndexImages(([start, end]) => [start + 1, end + 1])
    }
  }

  const handleChangeQuantity = v => setQuantity(v)

  const handleAddToCart = async () => {
    try {
      const res = await dispatch(
        addToCart({ product_id: product._id, buy_count: quantity })
      ).then(unwrapResult)
      await dispatch(getCartPurchases()).then(unwrapResult)
      toast.success(res.message, { position: "top-center", autoClose: 4000 })
    } catch (err) {
      console.error("Thêm vào giỏ hàng lỗi:", err)
    }
  }

  return (
    <div>
      <Helmet>
        <title>{product.name || "Đang tải..."}</title>
      </Helmet>

      {product._id && (
        <div className="container">
          <S.ProductBriefing>
            <S.ProductImages>
              <S.ProductImageActive>
                <img src={currentImage.url} alt={product.name} />
              </S.ProductImageActive>
              <S.ProductImagesSlider>
                <S.ProductIconButtonPrev onClick={choosePrev} />
                {currentImages.map(img => (
                  <S.ProductImage
                    key={img.id}
                    $active={currentImage.id === img.id}
                    onMouseEnter={() => chooseCurrentImage(img)}
                  >
                    <img src={img.url} alt="" />
                  </S.ProductImage>
                ))}
                <S.ProductIconButtonNext onClick={chooseNext} />
              </S.ProductImagesSlider>
            </S.ProductImages>

            <S.ProductMeta>
              <S.ProductTitle>{product.name}</S.ProductTitle>
              <S.ProductMeta1>
                <S.ProductRating>
                  <span>{product.rating}</span>
                  <ProductRating rating={product.rating} />
                </S.ProductRating>
                <S.ProductSold>
                  <span>
                    {product.sold < 1000
                      ? product.sold
                      : `${product.sold / 1000}k`}
                  </span>
                  <span>Đã bán</span>
                </S.ProductSold>
              </S.ProductMeta1>

              <S.ProductPrice>
                <S.ProductPriceOriginal>
                  đ{product.price_before_discount?.toLocaleString()}
                </S.ProductPriceOriginal>
                <S.ProductPriceSale>
                  đ{product.price?.toLocaleString()}
                </S.ProductPriceSale>
                <S.ProductPriceSalePercent>
                  {SalePercent(product.price_before_discount, product.price)} giảm
                </S.ProductPriceSalePercent>
              </S.ProductPrice>

              <S.ProductBuyQuantity>
                <S.ProductBuyQuantityTitle>Số lượng</S.ProductBuyQuantityTitle>
                <S.ProductBuyQuantityController>
                  <ProductQuantityController
                    value={quantity}
                    max={product.quantity}
                    onChange={handleChangeQuantity}
                  />
                </S.ProductBuyQuantityController>
                <S.ProductBuyQuantityNumber>
                  {product.quantity} sản phẩm có sẵn
                </S.ProductBuyQuantityNumber>
              </S.ProductBuyQuantity>

              <S.ProductButtons onClick={handleAddToCart}>
                Thêm vào giỏ hàng
              </S.ProductButtons>
            </S.ProductMeta>
          </S.ProductBriefing>

          <S.ProductContent>
            <S.ProductContentHeading>Mô tả sản phẩm</S.ProductContentHeading>
            <S.ProductContentDetail
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description || "")
              }}
            />
          </S.ProductContent>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
