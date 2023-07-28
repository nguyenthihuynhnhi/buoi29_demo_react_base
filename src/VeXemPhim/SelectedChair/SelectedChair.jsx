import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedChair extends Component {
  render() {
    const { selecChair, handleDelete } = this.props;
    let giaTien = 0;
    return (
      <div>
        <h2 className="text-center mb-5">DANH SÁCH GHẾ BẠN CHỌN</h2>

        <div className="d-flex align-items-center gap-4 mt-3">
          <div className="ghe__da__dat"></div>
          <span>Ghế đã đặt</span>
        </div>

        <div className="d-flex align-items-center gap-4  mt-3">
          <div className="ghe__dang__dat"></div>
          <span>Ghế đang chọn</span>
        </div>

        <div className="d-flex align-items-center gap-4  my-3">
          <div className="ghe__chua__dat "></div>
          <span>Ghế chưa chọn</span>
        </div>

        <div className="table1">
          <table className="table table-bordered text-white m-0 text-center">
            <thead>
              <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col">Hủy</th>
              </tr>
            </thead>
            <tbody>
              {selecChair.map((item, index) => {
                giaTien += item.gia;
                return (
                  <tr key={index}>
                    <th scope="row">{item.soGhe}</th>
                    <td className="text-warning">{item.gia}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <th scope="row">Tổng</th>
                <td colSpan={2}>{giaTien}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selecChair: state.veReducer.selecChair,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (soGhe) => {
      const action = {
        type: "DELETE",
        payload: soGhe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedChair);
