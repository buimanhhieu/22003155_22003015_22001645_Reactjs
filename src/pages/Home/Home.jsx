import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"
import FilterPanel from "src/components/FilterPanel/FilterPanel"
import SearchItemResult from "src/components/SearchItemResult/SearchItemResult"
import * as S from "./home.style"
import { getCategories, getProducts } from "./home.slice.jsx"
import useQuery from "src/hooks/useQuery"
import { Helmet } from "react-helmet-async"

function Home() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({
    products: [],
    pagination: {}
  })
  const [filters, setFilters] = useState({})
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const query = useQuery()

  useEffect(() => {
    console.log("✅ Gọi API lấy danh mục")

    dispatch(getCategories())
      .then(unwrapResult)
      .then((res) => {
        setCategories(res.data)
        console.log("✅ Danh mục:", res.data)
      })
      .catch((err) => {
        console.error("❌ Lỗi danh mục:", err)
        setError("Không thể tải danh mục.")
      })
  }, [dispatch])

  useEffect(() => {
    console.log("✅ Gọi API lấy sản phẩm")

    const _filters = {
      ...query,
      page: query.page || 1,
      limit: query.limit || 30,
      sortBy: query.sortBy || "view"
    }

    setFilters(_filters)

    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }

    const _getProducts = async () => {
      try {
        const data = await dispatch(getProducts({ params }))
        const res = unwrapResult(data)
        console.log("✅ Sản phẩm:", res.data)
        setProducts(res.data)
        setError(null)
      } catch (err) {
        console.error("❌ Lỗi lấy sản phẩm:", err)
        setError("Không thể tải sản phẩm. Vui lòng thử lại sau.")
      }
    }

    _getProducts()
  }, [dispatch, query])

  return (
    console.log("✅ Home component đang được render"),
    <div>
      <Helmet>
        <title>Shopee Việt Nam | Mua và bán trên ứng dụng di động và website</title>
      </Helmet>
      <S.Container className="container">
        <S.Side>
          <FilterPanel categories={categories} filters={filters} />
        </S.Side>
        <S.Main>
          {error ? (
            <h2 style={{ color: "red", padding: 20 }}>{error}</h2>
          ) : products.products.length === 0 ? (
            <h2 style={{ padding: 20 }}>Không có sản phẩm nào</h2>
          ) : (
            <SearchItemResult products={products} filters={filters} />
          )}
        </S.Main>
      </S.Container>
    </div>
  )
}

export default Home
