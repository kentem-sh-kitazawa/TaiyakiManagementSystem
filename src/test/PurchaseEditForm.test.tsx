import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PurchaseEditForm from "../components/PurchaseEditForm";
import { BrowserRouter } from "react-router-dom";

const money = 0;
describe("合計金額の計算テスト", () => {
  beforeEach(() => {
    window.alert = vi.fn();
    render(
      <BrowserRouter>
        <PurchaseEditForm
          myMoney={money}
          setMyMoney={vi.fn()}
          setPurchaseTaiyakis={vi.fn()}
        />
      </BrowserRouter>
    );
  });

  test("所持金が足りないときにアラートが表示されているか", async () => {
    const user = userEvent.setup();
    const purchaseButton = screen.getByText("購入");
    await user.click(purchaseButton);
    //toHaveBeenCalledWith(アラートで呼び出される文字)
    expect(window.alert).toHaveBeenCalledWith("所持金が足りません");
  });

  // money = 1000;
  // test("購入ができるか", async () => {
  //   const user = userEvent.setup();
  //   const purchaseButton = screen.getByText("購入");
  //   await user.click(purchaseButton);
  //   expect(window.alert).not.toHaveBeenCalled();
  // });
});
