import React, { Component } from "react";
import { connect } from "react-redux";

class ListChair extends Component {
  render() {
    const { data, handleBook, selecChair } = this.props;
    console.log("🏊🏼‍♀️ 👙 ListChair 👙 render 👙 selecChair:", selecChair);

    const phanTuCon = (item, index) => {
      const hang1 = item.danhSachGhe.map((item1, index1) => {
        // Hàng đầu tiền 1, 2, 3 , 4, 5
        if (index === 0) {
          return (
            <div className="cot" key={index1}>
              {item1.soGhe}
            </div>
          );
        }

        const index2 = selecChair.findIndex((item2) => {
          return item2.soGhe === item1.soGhe;
        });

        const creatClass = () => {
          let classes = "";

          // ĐÃ có trong mảng selecChair(bảng table) => ghe__dang__dat
          if (index2 !== -1) {
            classes = "ghe__dang__dat";
          }

          // CHƯA có trong mảng selecChair(bảng table) => ghe__da__dat
          if (index2 === -1) {
            classes = "ghe__chua__dat";
          }

          // nếu key daDat mà bằng true => ghe__da__dat
          if (item1.daDat === true) {
            classes = "ghe__da__dat";
          }

          return classes;
        };

        // A1 A2 A3
        return (
          <div
            className={creatClass()}
            onClick={() => {
              handleBook(item1);
            }}
            key={index1}
          >
            {item1.soGhe}
          </div>
        );
      });
      return hang1;
    };

    const soHang = data.map((item, index) => {
      // nếu là hàng đầu tiền index === 0

      return (
        //Render hàng lớn
        <div
          key={index}
          className="d-flex border border-warning gap-2 mb-2 p-2"
        >
          {/* render cột: A B C D */}
          <div className="cot">{item.hang}</div>

          {/* render 1,2,3,4 và A1 A2 A3 */}
          {phanTuCon(item, index)}
        </div>
      );
    });

    return (
      <div>
        <h2 className="text-center">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
        <h5 className="text-center">Màn hình</h5>
        <div className="screen mb-4"></div>
        <div>{soHang}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.veReducer.data,
    selecChair: state.veReducer.selecChair,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleBook: (soGhe) => {
      const action = {
        type: "BOOK",
        payload: soGhe,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListChair);
