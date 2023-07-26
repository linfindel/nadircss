# NadirCSS Documentation

NadirCSS is a lightweight CSS library that provides a set of customizable styles for various HTML elements. It includes buttons, cards, checkboxes, input fields, and more. The library aims to enhance the appearance and user experience of web pages. Below is the documentation for using NadirCSS in your projects:

## Global styles
### Fonts
NadirCSS provides three font options: Cantarell, Noto Sans, and Roboto. You can set the font globally for the entire document body by applying one of the following classes to the `<body>` tag:
* `.body-font-cantarell`: Sets the font to Cantarell
* `.body-font-noto`: Sets the font to Noto Sans (recommended & default).
* `.body-font-roboto`: Sets the font to Roboto.

### Cursor Styles
NadirCSS includes custom cursor styles for various elements:

* The entire document body has a custom cursor.
* Buttons have a custom link-select cursor.
* Input fields have a custom text-select cursor.

## Components
### Buttons
NadirCSS provides various button styles to choose from:

#### Basic button
This should be used for generic actions.
```html
<button>Button</button>
```

#### Error button
This should be used when the associated action is unavailable.
```html
<button class="button-error">Error Button</button>
```

#### Subtle button
This should be used for lower-profile or less important actions.
```html
<button class="button-subtle">Subtle Button</button>
```

#### Icon button
> With Material Symbols Rounded Icons

This should be used for simple and important actions which are easy to discern from their icon.

```html
<button class="material-symbols-rounded">edit</button>
```

#### Icon button with error style
This should be used for simple and important actions that are unavailable.
```html
<button class="material-symbols-rounded button-icon-error">edit</button>
```

#### Icon button with subtle style
This should be used for simple and less important actions which are easy to discern from their icon.
```html
<button class="material-symbols-rounded button-icon-subtle">edit</button>
```

### Cards
NadirCSS provides card styles with different variations:

#### Basic card
This should be used to contain nondescript items.
```html
<div class="card">Card</div>
```

#### Error card
This should be used to indicate that the contained items are incorrect or require immediate attention.
```html
<div class="card-error">Error Card</div>
```

#### Subtle card
This should be used to contain less important nondescript items.
```html
<div class="card-subtle">Error Card</div>
```

#### Success card
This should be used to indicate that the contained items are correct or have been submitted.
```html
<div class="card-success">Error Card</div>
```

#### Warning card
This should be used to display debug information or to warn a user of an unstable or high-difficulty area.
```html
<div class="card-warning">Error Card</div>
```

### Checkboxes
NadirCSS offers different styles for checkboxes:

#### Selected checkbox
```html
<div class="checkbox-selected material-symbols-rounded">check</div>
```

#### Unselected checkbox
```html
<div class="checkbox-unselected material-symbols-rounded">done</div>
```

#### Indeterminate checkbox
```html
<div class="checkbox-indeterminate material-symbols-rounded">check_indeterminate_small</div>
```

### Dividers
NadirCSS includes a horizontal divider style:
```html
<div class="divider"></div>
```

### Input fields
NadirCSS provides custom styles for text input fields:

#### Basic input field
```html
<input type="text" placeholder="Text input" class="outline-none">
```

#### Input field with error style
This should be used when the inputted text is invalid or incorrect.
```html
<input type="text" placeholder="Text input error" class="outline-none input-error">
```

#### Input field with subtle style
```html
<input type="text" placeholder="Text input subtle" class="outline-none">
```

#### Input field with success style
This should be used when the inputted text is valid or correct.
```html
<input type="text" placeholder="Text input success" class="outline-none input-success">
```

### Search boxes
NadirCSS offers different styles for search boxes:

#### Basic search box
```html
<div class="search-box">
    <span class="material-symbols-rounded">search</span>
    <input type="text" placeholder="Search" class="input-search">
</div>
```

#### Search box with error style
```html
<div class="search-box-error">
    <span class="material-symbols-rounded">search</span>
    <input type="text" placeholder="Error search" class="input-search">
</div>
```

#### Search box with subtle style
```html
<div class="search-box-subtle">
    <span class="material-symbols-rounded">search</span>
    <input type="text" placeholder="Subtle search" class="input-search">
</div>
```
