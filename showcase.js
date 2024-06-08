const showcase = document.getElementById("showcase");

const exhibits = [
  //Buttons

  `<button>
    <span translate="no" class="material-symbols-rounded">add_circle</span>
    Button
  </button>`,

  `<button class="button-error">
    <span translate="no" class="material-symbols-rounded">add_circle</span>
    Button
  </button>`,

  `<button class="button-subtle">
    <span translate="no" class="material-symbols-rounded">add_circle</span>
    Button
  </button>`,

  `<button class="button-success">
    <span translate="no" class="material-symbols-rounded">add_circle</span>
    Button
  </button>`,

  `<button class="button-warning">
    <span translate="no" class="material-symbols-rounded">add_circle</span>
    Button
  </button>`,

  // Text inputs

  `<input type="text" placeholder="Text input">`,

  `<input class="input-error" type="text" placeholder="Text input">`,

  `<input class="input-subtle" type="text" placeholder="Text input">`,

  `<input class="input-success" type="text" placeholder="Text input">`,

  `<input class="input-warning" type="text" placeholder="Text input">`,

  // Textareas

  `<textarea cols="30" rows="10" placeholder="Textarea"></textarea>`,

  // Number inputs
  `<input type="number" placeholder="Number input">`,

  `<input class="input-error" type="number" placeholder="Number input">`,

  `<input class="input-subtle" type="number" placeholder="Number input">`,

  `<input class="input-success" type="number" placeholder="Number input">`,

  `<input class="input-warning" type="number" placeholder="Number input">`,

  // Cards
  `<div class="card">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-top">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-bottom">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-top-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-top-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-top-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-top-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-bottom-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-bottom-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-bottom-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-flat-bottom-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-top">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-bottom">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-top-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-top-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-top-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-top-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-bottom-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-bottom-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-bottom-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-error-flat-bottom-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-top">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-bottom">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-top-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-top-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-top-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-top-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-bottom-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-bottom-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-bottom-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-subtle-flat-bottom-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-top">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-bottom">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-top-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-top-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-top-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-top-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-bottom-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-bottom-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-bottom-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-success-flat-bottom-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-top">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-bottom">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-top-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-top-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-top-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-top-right-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-bottom-left">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-bottom-left-alt">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-bottom-right">
    <h2>Card</h2>
  </div>`,

  `<div class="card-warning-flat-bottom-right-alt">
    <h2>Card</h2>
  </div>`,

  // Navbars
  `<nav style="width: 100%;">
    <h1>Navbar</h1>
  </nav>`,

  `<nav style="width: 100%;" class="error">
    <h1>Navbar</h1>
  </nav>`,

  `<nav style="width: 100%;" class="success">
    <h1>Navbar</h1>
  </nav>`,

  // Progress bars
  `<div class="progress">
    <div class="progress-bar-determinate"></div>
  </div>`,

  `<div class="progress">
    <div class="progress-bar-indeterminate"></div>
  </div>`,

  `<div class="progress-error">
    <div class="progress-bar-determinate-error"></div>
  </div>`,

  `<div class="progress-error">
    <div class="progress-bar-indeterminate-error"></div>
  </div>`,

  `<div class="progress-subtle">
    <div class="progress-bar-determinate-subtle"></div>
  </div>`,

  `<div class="progress-subtle">
    <div class="progress-bar-indeterminate-subtle"></div>
  </div>`,

  `<div class="progress-success">
    <div class="progress-bar-determinate-success"></div>
  </div>`,

  `<div class="progress-success">
    <div class="progress-bar-indeterminate-success"></div>
  </div>`,

  `<div class="progress-warning">
    <div class="progress-bar-determinate-warning"></div>
  </div>`,

  `<div class="progress-warning">
    <div class="progress-bar-indeterminate-warning"></div>
  </div>`,

  // Search fields
  `<div class="search-box">
    <span translate="no" class="material-symbols-rounded">search</span>
    <input type="text" class="input-search" placeholder="Search">
  </div>`,

  `<div class="search-box-error">
    <span translate="no" class="material-symbols-rounded">search</span>
    <input type="text" class="input-search" placeholder="Search">
  </div>`,

  `<div class="search-box-subtle">
    <span translate="no" class="material-symbols-rounded">search</span>
    <input type="text" class="input-search" placeholder="Search">
  </div>`,

  // Snackbars
  `<div class="snackbar row">
    <h1>Snackbar</h1>

    <button class="button-subtle">
      <span translate="no" class="material-symbols-rounded">close</span>
    </button>
  </div>`,

  // Toolbars
  `<div class="toolbar">
    <h1>Toolbar</h1>
  </div>`,

  `<div class="toolbar-warning">
    <h1>Toolbar</h1>
  </div>`,

  // Tooltips
  `<div class="tooltip">
    Tooltip
  </div>`
]

function randomExhibit() {
  let randomExhibit = exhibits[Math.floor(Math.random() * exhibits.length)]

  showcase.innerHTML = randomExhibit;
}

randomExhibit();

setInterval(() => {
  randomExhibit();
}, 500);