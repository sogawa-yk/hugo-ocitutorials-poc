document.addEventListener("DOMContentLoaded", function () {
  function initializeSearch() {
      var searchInput = document.getElementById("gdoc-search-input");
      if (!searchInput) {
          console.error("検索ボックスが見つかりません");
          return;
      }

      console.log("検索ボックスを検出: ", searchInput); // 確認用
      searchInput.addEventListener("input", function () {
          var query = this.value.trim();
          if (query.length < 2) return;

          fetch("/search.json")
              .then(response => response.json())
              .then(data => {
                  console.log("検索結果:", data);
              })
              .catch(error => console.error("検索データの取得に失敗:", error));
      });
  }

  setTimeout(initializeSearch, 1000); // 1秒待ってから実行
});
