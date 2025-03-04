const cardTemplate = `<div class="card">
  <div class="card-head">
    <img src="https://picsum.photos/500/500" alt="thumbnail">
  </div>
  <div class="card-body">
    <div class="card-content">
      Lorem ipsum dolor sit
    </div>
    <div class="card-footer">
      <button>
        See More &gt;
      </button>
    </div>
  </div>
</div>`;

const count = 9;

for (let i = 0; i < count; i++) {
  document.querySelector(".card-container").innerHTML += cardTemplate;
}
