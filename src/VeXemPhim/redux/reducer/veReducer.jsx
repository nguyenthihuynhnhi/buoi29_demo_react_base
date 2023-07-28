import { data } from "../../data";

const initState = {
  data: data,
  selecChair: [],
};

export const veReducer = (state = initState, action) => {
  switch (action.type) {
    case "BOOK": {
      const copyState = JSON.parse(JSON.stringify(state));

      const gheBook = action.payload;
      // nếu mà key daDat === true thì không push => không làm gì hết
      if (gheBook.daDat === true) {
        return { ...state, selecChair: copyState.selecChair };
      }

      // 1) tìm kiếm gheBook có trong mảng copyState.selecChair này hay không
      // sử dụng findIndex
      const index = copyState.selecChair.findIndex((item) => {
        if (item.soGhe === gheBook.soGhe) return true;
      });

      // 2) Nếu chưa có => index sẽ là trừ -1 thì push vào mảng
      if (index === -1) {
        copyState.selecChair.push(gheBook);
      }

      // 3) Nếu mà có rồi => index sẽ khác -1, thì khi đó mình sẽ xóa nó đi
      // bằng cách loại trừ (noition)
      if (index !== -1) {
        copyState.selecChair = copyState.selecChair.filter(
          (item) => item.soGhe !== gheBook.soGhe
        );
      }

      return { ...state, selecChair: copyState.selecChair };
    }
    case "DELETE": {
      const copyState = JSON.parse(JSON.stringify(state));
      const gheDel = action.payload;
      //   const index = copyState.selecChair.findIndex((item) => {
      //     if (gheDel.soGhe === item.soGhe) {
      //       return true;
      //     }
      //     return false;
      //   });
      //   copyState.selecChair.splice(index, 1);

      //Cách 2: Sử dụng filter để trả về mảng mới
      //   copyState.selecChair = copyState.selecChair.filter((item) => {
      //     if (item.soGhe === gheDel.soGhe) {
      //       return false;
      //     }
      //     return true;
      //   });
      //cách 3: Return những thằng khác ghế xóa
      copyState.selecChair = copyState.selecChair.filter((item) => {
        return item.soGhe !== gheDel.soGhe;
      });

      return { ...state, selecChair: copyState.selecChair };
    }
    default:
      return state;
  }
};
