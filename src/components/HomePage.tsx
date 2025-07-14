import NavigationButtons from "./NavigationButtons";

import "../Styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-content">
      <table>
        <thead>
          <tr>
            <td>種類</td>
            <td>中身</td>
            <td>サイズ</td>
            <td>価格</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>あ</td>
            <td>あ</td>
            <td>あ</td>
            <td>あ</td>
          </tr>
        </tbody>
      </table>
      <div className="navigation-panel">
        <NavigationButtons />
        <p>使ったお金:</p>
      </div>
    </div>
  );
};

export default HomePage;
