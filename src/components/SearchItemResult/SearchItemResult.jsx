// src/pages/Search/SearchItemResult.jsx
import React from "react"
import Pagination from "../Pagination/Pagination"
import ProductItem from "../ProductItem/ProductItem"
import * as S from "./searchItemResult.style"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { path } from "src/constants/path"
import qs from "query-string"
import classNames from "classnames"

function SearchItemResult({ products, filters }) {
  const { products: productList, pagination } = products

  // Dùng useNavigate thay useHistory
  const navigate = useNavigate()

  const sortBy = (sortBy, order) => {
    const _filters = { ...filters, sortBy }
    if (order) {
      _filters.order = order
    } else {
      delete _filters.order
    }
    navigate(path.home + `?${qs.stringify(_filters)}`)
  }

  const handleActiveOptionSort = value =>
    classNames({
      active: value === filters.sortBy
    })

  const handleSortByPriceValue = () => {
    let value = `${filters.sortBy}:${filters.order}`
    if (value !== "price:asc" && value !== "price:desc") {
      value = ""
    }
    return value
  }

  const goToPrev = () => {
    if (pagination.page !== 1) {
      const _filters = { ...filters, page: pagination.page - 1 }
      navigate(path.home + `?${qs.stringify(_filters)}`)
    }
  }

  const goToNext = () => {
    if (pagination.page !== pagination.page_size) {
      const _filters = { ...filters, page: pagination.page + 1 }
      navigate(path.home + `?${qs.stringify(_filters)}`)
    }
  }

  return (
    <div>
      <S.SortBar>
        <S.SortBarLabel>Sắp xếp theo</S.SortBarLabel>
        <S.SortByOptions>
          <S.SortByOptionsOption
            onClick={() => sortBy("view")}
            className={handleActiveOptionSort("view")}
          >
            Phổ biến
          </S.SortByOptionsOption>
          <S.SortByOptionsOption
            onClick={() => sortBy("createdAt")}
            className={handleActiveOptionSort("createdAt")}
          >
            Mới nhất
          </S.SortByOptionsOption>
          <S.SortByOptionsOption
            onClick={() => sortBy("sold")}
            className={handleActiveOptionSort("sold")}
          >
            Bán chạy
          </S.SortByOptionsOption>
          <S.SortByPrice
            onChange={event =>
              sortBy(...event.target.value.split(":"))
            }
            className={handleActiveOptionSort("price")}
            value={handleSortByPriceValue()}
          >
            <option disabled value="">
              Giá
            </option>
            <option value="price:asc">Giá: Thấp đến Cao</option>
            <option value="price:desc">Giá: Cao đến Thấp</option>
          </S.SortByPrice>
        </S.SortByOptions>

        <S.MiniPageController>
          <S.MiniPageControllerState>
            <S.MiniPageControllerCurrentState>
              {pagination.page}
            </S.MiniPageControllerCurrentState>
            /
            <S.MiniPageControllerTotalState>
              {pagination.page_size}
            </S.MiniPageControllerTotalState>
          </S.MiniPageControllerState>
          <S.ButtonControllerPrev
            onClick={goToPrev}
            disabled={pagination.page === 1}
          >
            {/* icon left */}
          </S.ButtonControllerPrev>
          <S.ButtonControllerNext
            onClick={goToNext}
            disabled={pagination.page === pagination.page_size}
          >
            {/* icon right */}
          </S.ButtonControllerNext>
        </S.MiniPageController>
      </S.SortBar>

      {productList && (
        <S.ProductList>
          {productList.map(product => (
            <ProductItem key={product._id} product={product} />
          ))}
        </S.ProductList>
      )}

      <Pagination pagination={pagination} filters={filters} />
    </div>
  )
}

SearchItemResult.propTypes = {
  products: PropTypes.shape({
    products: PropTypes.array,
    pagination: PropTypes.object
  }),
  filters: PropTypes.object
}

export default SearchItemResult
