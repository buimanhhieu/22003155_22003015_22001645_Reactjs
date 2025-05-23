import React from "react"
import * as S from "./pagination.style"
import PropTypes from "prop-types"
import { useHistory } from "react-router"
import { usePagination } from "@mui/lab"
import classNames from "classnames"
import { path } from "src/constants/path"
import qs from "query-string"

function Pagination({ pagination, filters }) {
  const history = useHistory()
  const { items } = usePagination({
    count: pagination.page_size || 0,
    page: pagination.page || 1
  })

  const goToPrev = () => {
    if (pagination.page !== 1) {
      const _filters = { ...filters, page: pagination.page - 1 }
      history.push(path.home + `?${qs.stringify(_filters)}`)
    }
  }

  const goToNext = () => {
    if (pagination.page !== pagination.page_size) {
      const _filters = { ...filters, page: pagination.page + 1 }
      history.push(path.home + `?${qs.stringify(_filters)}`)
    }
  }

  const goToPage = page => {
    const _filters = { ...filters, page }
    history.push(path.home + `?${qs.stringify(_filters)}`)
  }

  return (
    <div>
      <S.Pagination>
        {items.map(({ page, type, selected }, index) => {
          let children = null
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = (
              <S.ButtonNoOutLine disabled key={index}>
                ...
              </S.ButtonNoOutLine>
            )
          } else if (type === "previous") {
            children = (
              <S.ButtonIcon
                key={index}
                disabled={pagination.page === 1}
                onClick={goToPrev}
              >
                <svg
                  enableBackground="new 0 0 11 11"
                  viewBox="0 0 11 11"
                  x={0}
                  y={0}
                  className="shopee-svg-icon icon-arrow-left"
                >
                  <g>
                    <path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z" />
                  </g>
                </svg>
              </S.ButtonIcon>
            )
          } else if (type === "next") {
            children = (
              <S.ButtonIcon
                key={index}
                disabled={pagination.page === pagination.page_size}
                onClick={goToNext}
              >
                <svg
                  enableBackground="new 0 0 11 11"
                  viewBox="0 0 11 11"
                  x={0}
                  y={0}
                  className="shopee-svg-icon icon-arrow-right"
                >
                  <path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z" />
                </svg>
              </S.ButtonIcon>
            )
          } else if (type === "page") {
            children = (
              <S.ButtonNoOutLine
                key={index}
                className={classNames({
                  active: selected
                })}
                onClick={() => goToPage(page)}
              >
                {page}
              </S.ButtonNoOutLine>
            )
          }

          return children
        })}
      </S.Pagination>
    </div>
  )
}

Pagination.propTypes = {
  pagination: PropTypes.object,
  filters: PropTypes.object
}

export default Pagination
