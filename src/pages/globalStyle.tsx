import styled from "styled-components";

export const SOSXDAPPSTYLE = styled.html`

@font-face {
  font-family: 'digital-7';
  src: url('../font/digital-7.ttf');
}

@font-face {
  font-family: 'poppins-bold';
  src: url('../font/poppins-bold.ttf');
}

@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700");
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
@import url("https://fonts.googleapis.com/css?family=Nunito:400,600,700");
@import url("../icons/simple-line-icons/css/simple-line-icons.css");
@import url("../icons/font-awesome-old/css/font-awesome.min.css");
@import url("../icons/material-design-iconic-font/css/materialdesignicons.min.css");
@import url("../icons/themify-icons/css/themify-icons.css");
@import url("../icons/line-awesome/css/line-awesome.min.css");
@import url("../icons/avasta/css/style.css");
@import url("../icons/flaticon/flaticon.css");
@import url("../icons/icomoon/icomoon.css");
@import url(../vendor/animate/animate.min.css);
@import url(../vendor/aos/css/aos.min.css);
@import url(../vendor/perfect-scrollbar/css/perfect-scrollbar.css);
@import url(../vendor/metismenu/css/metisMenu.min.css);

/*
0 - 600: Phone
600 - 900: Tablet portrait
900 - 1200: Tablet landscape
1200 - 1800: Normal styles
1800+ : Big Desktop
1em = 16px
The smaller device rules always should write below the bigger device rules
Fixing Order => Base + Typography >> General Layout + Grid >> Page Layout + Component
*/


/*!
* Bootstrap v4.5.3 (https://getbootstrap.com/)
* Copyright 2011-2020 The Bootstrap Authors
* Copyright 2011-2020 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/

.success {
  color: #31A745;
}

.warning {
  color: #e83e8c;
}



*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  
  font-weight: 300;
  line-height: 1.5!important;
  
  text-align: left;
  background-color: #000!important;

  font-size: 16px;
  color: #a2a2a2;}

[tabindex="-1"]:focus:not(:focus-visible) {
  outline: 0 !important;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: 700;
}

dd {
  margin-bottom: .5rem;
  margin-left: 0;
}

blockquote {
  margin: 0 0 1rem;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 90%;
}

small2,
.small2 {
  font-size: 60%;
  font-weight: 400;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -.25em;
}

sup {
  top: -.5em;
}

a {
  color: #43c4d3;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #0c6f5d;
  text-decoration: underline;
}

a:not([href]):not([class]) {
  color: inherit;
  text-decoration: none;
}

a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

span.nav-text {
  color: #fff;
}

pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}

pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  -ms-overflow-style: scrollbar;
}

figure {
  margin: 0 0 1rem;
}

img {
  vertical-align: middle;
  border-style: none;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}

table {
  border-collapse: collapse;
}

caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #89879f;
  text-align: left;
  caption-side: bottom;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: 0px;
  resize: none !important;
background: #d9d9d9;}

input#rulename {}

button,
input {
  overflow: visible;
}

.CodeMirror-vscrollbar {
  margin-right: 10px !important;
}

button,
select {
  text-transform: none;
}

[role="button"] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button:not(:disabled),
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled) {
  cursor: pointer;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

textarea {
  overflow: auto;
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

summary {
  display: list-item;
  cursor: pointer;
}

template {
  display: none;
}

[hidden] {
  display: none !important;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-weight: 300;
  line-height: 1.2;
  color: #ffffff;
}

h1,
.h1 {
  font-size: 36px!important;
margin-bottom: 10px!important;}

h2,
.h2 {
  font-size: 70px !important;
  color: #fff;
  font-weight: 200;
  margin-bottom: 0;
}

h3,
.h3 {
  font-size: 21px !important;
margin-bottom: 15px!important;}

h4,
.h4 {
  font-size: 1.125rem;
}

h5,
.h5 {
  font-size: 1rem;
  color: #e3e70a;
}

h6,
.h6 {
  font-size: 0.938rem;
}

.lead {
  font-size: 1.09375rem;
  font-weight: 300;
}

.display-1 {
  font-size: 6rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-2 {
  font-size: 5.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.display-4 {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

small,
.small {
  font-size: 90%;
  font-weight: 400;
}

mark,
.mark {
  padding: 0.2em;
  background-color: #fcf8e3;
}

.list-unstyled {
  padding-left: 0;
  list-style: none;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.list-inline-item {
  display: inline-block;
}

.list-inline-item:not(:last-child) {
  margin-right: 0.5rem;
}

.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

.blockquote {
  margin-bottom: 1rem;
  font-size: 1.09375rem;
}

.blockquote-footer {
  display: block;
  font-size: 80%;
  color: #6c757d;
}

.blockquote-footer::before {
  content: "\2014\00A0";
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-thumbnail {
  padding: 0.25rem;
  background-color: #F6FBF8;
  border: 1px solid #dee2e6;
  border-radius: 0.75rem;
  max-width: 100%;
  height: auto;
}

.figure {
  display: inline-block;
}

.figure-img {
  margin-bottom: 0.5rem;
  line-height: 1;
}

.figure-caption {
  font-size: 90%;
  color: #6c757d;
}

code {
  font-size: 87.5%;
  color: #e83e8c;
  word-wrap: break-word;
}

a>code {
  color: inherit;
}

kbd {
  padding: 0.2rem 0.4rem;
  font-size: 87.5%;
  color: #fff;
  background-color: #212529;
  border-radius: 0.2rem;
}

kbd kbd {
  padding: 0;
  font-size: 100%;
  font-weight: 700;
}

pre {
  display: block;
  font-size: 87.5%;
  color: #ffffff;
}

pre code {
  font-size: inherit;
  color: inherit;
  word-break: normal;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

.container,
.container-fluid,
.container-sm,
.container-md,
.container-lg,
.container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.h-lg-100 {
  height: 100% !important;
}

@media (max-width: 1200px) {
  .h-lg-100 {
      height: auto !important;
  }
}

@media (min-width: 576px) {
  .container,
  .container-sm {
      max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container,
  .container-sm,
  .container-md {
      max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  .container-lg {
      max-width: 960px;
  }
}

@media (min-width: 1200px) {
   :root {
      --card-game-height: 35vh !important;
  }
  .container,
  .container-sm,
  .container-md,
  .container-lg,
  .container-xl {
      max-width: 1140px;
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.no-gutters>.col,
.no-gutters>[class*="col-"] {
  padding-right: 0;
  padding-left: 0;
}

.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto,
.col-xxl-1,
.col-xxl-2,
.col-xxl-3,
.col-xxl-4,
.col-xxl-5,
.col-xxl-6,
.col-xxl-7,
.col-xxl-8,
.col-xxl-9,
.col-xxl-10,
.col-xxl-11,
.col-xxl-12,
.col-xxl,
.col-xxl-auto {
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.row-cols-1>* {
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2>* {
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3>* {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.row-cols-4>* {
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5>* {
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6>* {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  flex: 0 0 8.3333333333%;
  max-width: 8.3333333333%;
}

.col-2 {
  flex: 0 0 16.6666666667%;
  max-width: 16.6666666667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
}

.col-5 {
  flex: 0 0 41.6666666667%;
  max-width: 41.6666666667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.3333333333%;
  max-width: 58.3333333333%;
}

.col-8 {
  flex: 0 0 66.6666666667%;
  max-width: 66.6666666667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.3333333333%;
  max-width: 83.3333333333%;
}

.col-11 {
  flex: 0 0 91.6666666667%;
  max-width: 91.6666666667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  order: -1;
}

.order-last {
  order: 13;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

.offset-1 {
  margin-left: 8.3333333333%;
}

.offset-2 {
  margin-left: 16.6666666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.3333333333%;
}

.offset-5 {
  margin-left: 41.6666666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.3333333333%;
}

.offset-8 {
  margin-left: 66.6666666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.3333333333%;
}

.offset-11 {
  margin-left: 91.6666666667%;
}

@media (min-width: 576px) {
  .col-sm {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
  }
  .row-cols-sm-1>* {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .row-cols-sm-2>* {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .row-cols-sm-3>* {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .row-cols-sm-4>* {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .row-cols-sm-5>* {
      flex: 0 0 20%;
      max-width: 20%;
  }
  .row-cols-sm-6>* {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-sm-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
  }
  .col-sm-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
  }
  .col-sm-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-sm-3 {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .col-sm-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .col-sm-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
  }
  .col-sm-6 {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .col-sm-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
  }
  .col-sm-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
  }
  .col-sm-9 {
      flex: 0 0 75%;
      max-width: 75%;
  }
  .col-sm-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
  }
  .col-sm-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
  }
  .col-sm-12 {
      /* flex: 0 0 100%; */
      max-width: 100%;
  }
  .order-sm-first {
      order: -1;
  }
  .order-sm-last {
      order: 13;
  }
  .order-sm-0 {
      order: 0;
  }
  .order-sm-1 {
      order: 1;
  }
  .order-sm-2 {
      order: 2;
  }
  .order-sm-3 {
      order: 3;
  }
  .order-sm-4 {
      order: 4;
  }
  .order-sm-5 {
      order: 5;
  }
  .order-sm-6 {
      order: 6;
  }
  .order-sm-7 {
      order: 7;
  }
  .order-sm-8 {
      order: 8;
  }
  .order-sm-9 {
      order: 9;
  }
  .order-sm-10 {
      order: 10;
  }
  .order-sm-11 {
      order: 11;
  }
  .order-sm-12 {
      order: 12;
  }
  .offset-sm-0 {
      margin-left: 0;
  }
  .offset-sm-1 {
      margin-left: 8.3333333333%;
  }
  .offset-sm-2 {
      margin-left: 16.6666666667%;
  }
  .offset-sm-3 {
      margin-left: 25%;
  }
  .offset-sm-4 {
      margin-left: 33.3333333333%;
  }
  .offset-sm-5 {
      margin-left: 41.6666666667%;
  }
  .offset-sm-6 {
      margin-left: 50%;
  }
  .offset-sm-7 {
      margin-left: 58.3333333333%;
  }
  .offset-sm-8 {
      margin-left: 66.6666666667%;
  }
  .offset-sm-9 {
      margin-left: 75%;
  }
  .offset-sm-10 {
      margin-left: 83.3333333333%;
  }
  .offset-sm-11 {
      margin-left: 91.6666666667%;
  }
}

@media (min-width: 768px) {
  .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
  }
  .row-cols-md-1>* {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .row-cols-md-2>* {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .row-cols-md-3>* {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .row-cols-md-4>* {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .row-cols-md-5>* {
      flex: 0 0 20%;
      max-width: 20%;
  }
  .row-cols-md-6>* {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
  }
  .col-md-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
  }
  .col-md-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .col-md-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .col-md-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
  }
  .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .col-md-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
  }
  .col-md-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
  }
  .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
  }
  .col-md-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
  }
  .col-md-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
  }
  .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .order-md-first {
      order: -1;
  }
  .order-md-last {
      order: 13;
  }
  .order-md-0 {
      order: 0;
  }
  .order-md-1 {
      order: 1;
  }
  .order-md-2 {
      order: 2;
  }
  .order-md-3 {
      order: 3;
  }
  .order-md-4 {
      order: 4;
  }
  .order-md-5 {
      order: 5;
  }
  .order-md-6 {
      order: 6;
  }
  .order-md-7 {
      order: 7;
  }
  .order-md-8 {
      order: 8;
  }
  .order-md-9 {
      order: 9;
  }
  .order-md-10 {
      order: 10;
  }
  .order-md-11 {
      order: 11;
  }
  .order-md-12 {
      order: 12;
  }
  .offset-md-0 {
      margin-left: 0;
  }
  .offset-md-1 {
      margin-left: 8.3333333333%;
  }
  .offset-md-2 {
      margin-left: 16.6666666667%;
  }
  .offset-md-3 {
      margin-left: 25%;
  }
  .offset-md-4 {
      margin-left: 33.3333333333%;
  }
  .offset-md-5 {
      margin-left: 41.6666666667%;
  }
  .offset-md-6 {
      margin-left: 50%;
  }
  .offset-md-7 {
      margin-left: 58.3333333333%;
  }
  .offset-md-8 {
      margin-left: 66.6666666667%;
  }
  .offset-md-9 {
      margin-left: 75%;
  }
  .offset-md-10 {
      margin-left: 83.3333333333%;
  }
  .offset-md-11 {
      margin-left: 91.6666666667%;
  }
}

@media (min-width: 992px) {
  .col-lg {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
  }
  .row-cols-lg-1>* {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .row-cols-lg-2>* {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .row-cols-lg-3>* {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .row-cols-lg-4>* {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .row-cols-lg-5>* {
      flex: 0 0 20%;
      max-width: 20%;
  }
  .row-cols-lg-6>* {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-lg-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
  }
  .col-lg-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
  }
  .col-lg-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-lg-3 {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .col-lg-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .col-lg-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
  }
  .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .col-lg-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
  }
  .col-lg-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
  }
  .col-lg-9 {
      flex: 0 0 75%;
      max-width: 75%;
  }
  .col-lg-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
  }
  .col-lg-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
  }
  .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .order-lg-first {
      order: -1;
  }
  .order-lg-last {
      order: 13;
  }
  .order-lg-0 {
      order: 0;
  }
  .order-lg-1 {
      order: 1;
  }
  .order-lg-2 {
      order: 2;
  }
  .order-lg-3 {
      order: 3;
  }
  .order-lg-4 {
      order: 4;
  }
  .order-lg-5 {
      order: 5;
  }
  .order-lg-6 {
      order: 6;
  }
  .order-lg-7 {
      order: 7;
  }
  .order-lg-8 {
      order: 8;
  }
  .order-lg-9 {
      order: 9;
  }
  .order-lg-10 {
      order: 10;
  }
  .order-lg-11 {
      order: 11;
  }
  .order-lg-12 {
      order: 12;
  }
  .offset-lg-0 {
      margin-left: 0;
  }
  .offset-lg-1 {
      margin-left: 8.3333333333%;
  }
  .offset-lg-2 {
      margin-left: 16.6666666667%;
  }
  .offset-lg-3 {
      margin-left: 25%;
  }
  .offset-lg-4 {
      margin-left: 33.3333333333%;
  }
  .offset-lg-5 {
      margin-left: 41.6666666667%;
  }
  .offset-lg-6 {
      margin-left: 50%;
  }
  .offset-lg-7 {
      margin-left: 58.3333333333%;
  }
  .offset-lg-8 {
      margin-left: 66.6666666667%;
  }
  .offset-lg-9 {
      margin-left: 75%;
  }
  .offset-lg-10 {
      margin-left: 83.3333333333%;
  }
  .offset-lg-11 {
      margin-left: 91.6666666667%;
  }
}

@media (min-width: 1200px) {
  .col-xl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
  }
  .row-cols-xl-1>* {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .row-cols-xl-2>* {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .row-cols-xl-3>* {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .row-cols-xl-4>* {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .row-cols-xl-5>* {
      flex: 0 0 20%;
      max-width: 20%;
  }
  .row-cols-xl-6>* {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-xl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
  }
  .col-xl-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
  }
  .col-xl-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-xl-3 {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .col-xl-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .col-xl-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
  }
  .col-xl-6 {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .col-xl-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
  }
  .col-xl-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
  }
  .col-xl-9 {
      flex: 0 0 75%;
      max-width: 75%;
  }
  .col-xl-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
  }
  .col-xl-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
  }
  .col-xl-12 {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .order-xl-first {
      order: -1;
  }
  .order-xl-last {
      order: 13;
  }
  .order-xl-0 {
      order: 0;
  }
  .order-xl-1 {
      order: 1;
  }
  .order-xl-2 {
      order: 2;
  }
  .order-xl-3 {
      order: 3;
  }
  .order-xl-4 {
      order: 4;
  }
  .order-xl-5 {
      order: 5;
  }
  .order-xl-6 {
      order: 6;
  }
  .order-xl-7 {
      order: 7;
  }
  .order-xl-8 {
      order: 8;
  }
  .order-xl-9 {
      order: 9;
  }
  .order-xl-10 {
      order: 10;
  }
  .order-xl-11 {
      order: 11;
  }
  .order-xl-12 {
      order: 12;
  }
  .offset-xl-0 {
      margin-left: 0;
  }
  .offset-xl-1 {
      margin-left: 8.3333333333%;
  }
  .offset-xl-2 {
      margin-left: 16.6666666667%;
  }
  .offset-xl-3 {
      margin-left: 25%;
  }
  .offset-xl-4 {
      margin-left: 33.3333333333%;
  }
  .offset-xl-5 {
      margin-left: 41.6666666667%;
  }
  .offset-xl-6 {
      margin-left: 50%;
  }
  .offset-xl-7 {
      margin-left: 58.3333333333%;
  }
  .offset-xl-8 {
      margin-left: 66.6666666667%;
  }
  .offset-xl-9 {
      margin-left: 75%;
  }
  .offset-xl-10 {
      margin-left: 83.3333333333%;
  }
  .offset-xl-11 {
      margin-left: 91.6666666667%;
  }
}

@media (min-width: 1440) {
  .col-xxl {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
  }
  .row-cols-xxl-1>* {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .row-cols-xxl-2>* {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .row-cols-xxl-3>* {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .row-cols-xxl-4>* {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .row-cols-xxl-5>* {
      flex: 0 0 20%;
      max-width: 20%;
  }
  .row-cols-xxl-6>* {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-xxl-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: 100%;
  }
  .col-xxl-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
  }
  .col-xxl-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-xxl-3 {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .col-xxl-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .col-xxl-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
  }
  .col-xxl-6 {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .col-xxl-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
  }
  .col-xxl-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
  }
  .col-xxl-9 {
      flex: 0 0 75%;
      max-width: 75%;
  }
  .col-xxl-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
  }
  .col-xxl-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
  }
  .col-xxl-12 {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .order-xxl-first {
      order: -1;
  }
  .order-xxl-last {
      order: 13;
  }
  .order-xxl-0 {
      order: 0;
  }
  .order-xxl-1 {
      order: 1;
  }
  .order-xxl-2 {
      order: 2;
  }
  .order-xxl-3 {
      order: 3;
  }
  .order-xxl-4 {
      order: 4;
  }
  .order-xxl-5 {
      order: 5;
  }
  .order-xxl-6 {
      order: 6;
  }
  .order-xxl-7 {
      order: 7;
  }
  .order-xxl-8 {
      order: 8;
  }
  .order-xxl-9 {
      order: 9;
  }
  .order-xxl-10 {
      order: 10;
  }
  .order-xxl-11 {
      order: 11;
  }
  .order-xxl-12 {
      order: 12;
  }
  .offset-xxl-0 {
      margin-left: 0;
  }
  .offset-xxl-1 {
      margin-left: 8.3333333333%;
  }
  .offset-xxl-2 {
      margin-left: 16.6666666667%;
  }
  .offset-xxl-3 {
      margin-left: 25%;
  }
  .offset-xxl-4 {
      margin-left: 33.3333333333%;
  }
  .offset-xxl-5 {
      margin-left: 41.6666666667%;
  }
  .offset-xxl-6 {
      margin-left: 50%;
  }
  .offset-xxl-7 {
      margin-left: 58.3333333333%;
  }
  .offset-xxl-8 {
      margin-left: 66.6666666667%;
  }
  .offset-xxl-9 {
      margin-left: 75%;
  }
  .offset-xxl-10 {
      margin-left: 83.3333333333%;
  }
  .offset-xxl-11 {
      margin-left: 91.6666666667%;
  }
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #b7b7b7;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #EEEEEE;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #EEEEEE;
}

.table tbody+tbody {
  border-top: 2px solid #EEEEEE;
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #EEEEEE;
}

.table-bordered th,
.table-bordered td {
  border: 1px solid #EEEEEE;
}

.table-bordered thead th,
.table-bordered thead td {
  border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody+tbody {
  border: 0;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-hover tbody tr:hover {
  color: #b7b7b7;
  background-color: rgba(0, 0, 0, 0.075);
}

.table-primary,
.table-primary>th,
.table-primary>td {
  background-color: #bdeae2;
}

.table-primary th,
.table-primary td,
.table-primary thead th,
.table-primary tbody+tbody {
  border-color: #84d8c9;
}

.table-hover .table-primary:hover {
  background-color: #aae4da;
}

.table-hover .table-primary:hover>td,
.table-hover .table-primary:hover>th {
  background-color: #aae4da;
}

.table-secondary,
.table-secondary>th,
.table-secondary>td {
  background-color: #f2d8ba;
}

.table-secondary th,
.table-secondary td,
.table-secondary thead th,
.table-secondary tbody+tbody {
  border-color: #e7b77e;
}

.table-hover .table-secondary:hover {
  background-color: #eecca5;
}

.table-hover .table-secondary:hover>td,
.table-hover .table-secondary:hover>th {
  background-color: #eecca5;
}

.table-success,
.table-success>th,
.table-success>td {
  background-color: #c4eecf;
}

.table-success th,
.table-success td,
.table-success thead th,
.table-success tbody+tbody {
  border-color: #91dfa7;
}

.table-hover .table-success:hover {
  background-color: #b0e8bf;
}

.table-hover .table-success:hover>td,
.table-hover .table-success:hover>th {
  background-color: #b0e8bf;
}

.table-info,
.table-info>th,
.table-info>td {
  background-color: #c8d4fc;
}

.table-info th,
.table-info td,
.table-info thead th,
.table-info tbody+tbody {
  border-color: #9aaffa;
}

.table-hover .table-info:hover {
  background-color: #b0c1fb;
}

.table-hover .table-info:hover>td,
.table-hover .table-info:hover>th {
  background-color: #b0c1fb;
}

.table-warning,
.table-warning>th,
.table-warning>td {
  background-color: #feffb8;
}

.table-warning th,
.table-warning td,
.table-warning thead th,
.table-warning tbody+tbody {
  border-color: #fcff7a;
}

.table-hover .table-warning:hover {
  background-color: #feff9f;
}

.table-hover .table-warning:hover>td,
.table-hover .table-warning:hover>th {
  background-color: #feff9f;
}

.table-danger,
.table-danger>th,
.table-danger>td {
  background-color: #e9c7c7;
}

.table-danger th,
.table-danger td,
.table-danger thead th,
.table-danger tbody+tbody {
  border-color: #d69696;
}

.table-hover .table-danger:hover {
  background-color: #e2b5b5;
}

.table-hover .table-danger:hover>td,
.table-hover .table-danger:hover>th {
  background-color: #e2b5b5;
}

.table-light,
.table-light>th,
.table-light>td {
  background-color: #f2f2f2;
}

.table-light th,
.table-light td,
.table-light thead th,
.table-light tbody+tbody {
  border-color: #e7e7e7;
}

.table-hover .table-light:hover {
  background-color: #e5e5e5;
}

.table-hover .table-light:hover>td,
.table-hover .table-light:hover>th {
  background-color: #e5e5e5;
}

.table-dark,
.table-dark>th,
.table-dark>td {
  background-color: #c9cccf;
}

.table-dark th,
.table-dark td,
.table-dark thead th,
.table-dark tbody+tbody {
  border-color: #9ba0a6;
}

.table-hover .table-dark:hover {
  background-color: #bcbfc3;
}

.table-hover .table-dark:hover>td,
.table-hover .table-dark:hover>th {
  background-color: #bcbfc3;
}

.table-active,
.table-active>th,
.table-active>td {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover {
  background-color: rgba(0, 0, 0, 0.075);
}

.table-hover .table-active:hover>td,
.table-hover .table-active:hover>th {
  background-color: rgba(0, 0, 0, 0.075);
}

.table .thead-dark th {
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
}

.table .thead-light th {
  color: #495057;
  background-color: #e9ecef;
  border-color: #EEEEEE;
}

.table-dark {
  color: #fff;
  background-color: #343a40;
}

.table-dark th,
.table-dark td,
.table-dark thead th {
  border-color: #454d55;
}

.table-dark.table-bordered {
  border: 0;
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(255, 255, 255, 0.05);
}

.table-dark.table-hover tbody tr:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.075);
}

@media (max-width: 575.98px) {
  .table-responsive-sm {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
  }
  .table-responsive-sm>.table-bordered {
      border: 0;
  }
}

@media (max-width: 767.98px) {
  .table-responsive-md {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
  }
  .table-responsive-md>.table-bordered {
      border: 0;
  }
}

@media (max-width: 991.98px) {
  .table-responsive-lg {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
  }
  .table-responsive-lg>.table-bordered {
      border: 0;
  }
}

@media (max-width: 1199.98px) {
  .table-responsive-xl {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
  }
  .table-responsive-xl>.table-bordered {
      border: 0;
  }
}

@media (max-width: 1439.98) {
  .table-responsive-xxl {
      display: block;
      width: 100%;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
  }
  .table-responsive-xxl>.table-bordered {
      border: 0;
  }
}

.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.table-responsive>.table-bordered {
  border: 0;
}

.form-control {
  font-size: 20px;
  color: #100e15;
background-color: #d9d9d9;width: 100%;padding: 5px;z-index: 99999;}

@media (prefers-reduced-motion: reduce) {
  .form-control {
      transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #59edd3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
  background-color: #e9ecef;
  opacity: 1;
}

input[type="date"].form-control,
input[type="time"].form-control,
input[type="datetime-local"].form-control,
input[type="month"].form-control {
  appearance: none;
}

select.form-control:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.form-control-file,
.form-control-range {
  display: block;
  width: 100%;
}

.col-form-label {
  padding-top: calc(0.375rem + 1px);
  padding-bottom: calc(0.375rem + 1px);
  margin-bottom: 0;
  font-size: inherit;
  line-height: 1.5;
}

.col-form-label-lg {
  padding-top: calc(0.5rem + 1px);
  padding-bottom: calc(0.5rem + 1px);
  font-size: 1.09375rem;
  line-height: 1.5;
}

.col-form-label-sm {
  padding-top: calc(0.25rem + 1px);
  padding-bottom: calc(0.25rem + 1px);
  font-size: 0.765625rem;
  line-height: 1.5;
}

.form-control-plaintext {
  display: block;
  width: 100%;
  padding: 0.375rem 0;
  margin-bottom: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #b7b7b7;
  background-color: transparent;
  border: solid transparent;
  border-width: 1px 0;
}

.form-control-plaintext.form-control-sm,
.form-control-plaintext.form-control-lg {
  padding-right: 0;
  padding-left: 0;
}

.form-control-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1.09375rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

select.form-control[size],
select.form-control[multiple] {
  height: auto;
}

textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-text {
  display: block;
  margin-top: 0.25rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -5px;
  margin-left: -5px;
}

.form-row>.col,
.form-row>[class*="col-"] {
  padding-right: 5px;
  padding-left: 5px;
}

.form-check {
  position: relative;
  display: block;
  padding-left: 1.25rem;
}

.form-check-input {
  position: absolute;
  margin-top: 0.3rem;
  margin-left: -1.25rem;
}

.form-check-input[disabled]~.form-check-label,
.form-check-input:disabled~.form-check-label {
  color: #89879f;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check-inline {
  display: inline-flex;
  align-items: center;
  padding-left: 0;
  margin-right: 0.75rem;
}

.form-check-inline .form-check-input {
  position: static;
  margin-top: 0;
  margin-right: 0.3125rem;
  margin-left: 0;
}

.valid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #2bc155;
}

.valid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: .1rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(43, 193, 85, 0.9);
  border-radius: 0.75rem;
}

.was-validated :valid~.valid-feedback,
.was-validated :valid~.valid-tooltip,
.is-valid~.valid-feedback,
.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .form-control:valid,
.form-control.is-valid {
  border-color: #2bc155;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%232bc155' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .form-control:valid:focus,
.form-control.is-valid:focus {
  border-color: #2bc155;
  box-shadow: 0 0 0 0.2rem rgba(43, 193, 85, 0.25);
}

.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:valid,
.custom-select.is-valid {
  border-color: #2bc155;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%232bc155' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .custom-select:valid:focus,
.custom-select.is-valid:focus {
  border-color: #2bc155;
  box-shadow: 0 0 0 0.2rem rgba(43, 193, 85, 0.25);
}

.was-validated .form-check-input:valid~.form-check-label,
.form-check-input.is-valid~.form-check-label {
  color: #2bc155;
}

.was-validated .form-check-input:valid~.valid-feedback,
.was-validated .form-check-input:valid~.valid-tooltip,
.form-check-input.is-valid~.valid-feedback,
.form-check-input.is-valid~.valid-tooltip {
  display: block;
}

.was-validated .custom-control-input:valid~.custom-control-label,
.custom-control-input.is-valid~.custom-control-label {
  color: #2bc155;
}

.was-validated .custom-control-input:valid~.custom-control-label::before,
.custom-control-input.is-valid~.custom-control-label::before {
  border-color: #2bc155;
}

.was-validated .custom-control-input:valid:checked~.custom-control-label::before,
.custom-control-input.is-valid:checked~.custom-control-label::before {
  border-color: #49d670;
  background-color: #49d670;
}

.was-validated .custom-control-input:valid:focus~.custom-control-label::before,
.custom-control-input.is-valid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(43, 193, 85, 0.25);
}

.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before,
.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before {
  border-color: #2bc155;
}

.was-validated .custom-file-input:valid~.custom-file-label,
.custom-file-input.is-valid~.custom-file-label {
  border-color: #2bc155;
}

.was-validated .custom-file-input:valid:focus~.custom-file-label,
.custom-file-input.is-valid:focus~.custom-file-label {
  border-color: #2bc155;
  box-shadow: 0 0 0 0.2rem rgba(43, 193, 85, 0.25);
}

.invalid-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #B03636;
}

.invalid-tooltip {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5;
  display: none;
  max-width: 100%;
  padding: 0.25rem 0.5rem;
  margin-top: .1rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  color: #fff;
  background-color: rgba(176, 54, 54, 0.9);
  border-radius: 0.75rem;
}

.was-validated :invalid~.invalid-feedback,
.was-validated :invalid~.invalid-tooltip,
.is-invalid~.invalid-feedback,
.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .form-control:invalid,
.form-control.is-invalid {
  border-color: #B03636;
  padding-right: calc(1.5em + 0.75rem);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23B03636' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23B03636' stroke='none'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .form-control:invalid:focus,
.form-control.is-invalid:focus {
  border-color: #B03636;
  box-shadow: 0 0 0 0.2rem rgba(176, 54, 54, 0.25);
}

.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
  padding-right: calc(1.5em + 0.75rem);
  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
}

.was-validated .custom-select:invalid,
.custom-select.is-invalid {
  border-color: #B03636;
  padding-right: calc(0.75em + 2.3125rem);
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23B03636' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23B03636' stroke='none'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.was-validated .custom-select:invalid:focus,
.custom-select.is-invalid:focus {
  border-color: #B03636;
  box-shadow: 0 0 0 0.2rem rgba(176, 54, 54, 0.25);
}

.was-validated .form-check-input:invalid~.form-check-label,
.form-check-input.is-invalid~.form-check-label {
  color: #B03636;
}

.was-validated .form-check-input:invalid~.invalid-feedback,
.was-validated .form-check-input:invalid~.invalid-tooltip,
.form-check-input.is-invalid~.invalid-feedback,
.form-check-input.is-invalid~.invalid-tooltip {
  display: block;
}

.was-validated .custom-control-input:invalid~.custom-control-label,
.custom-control-input.is-invalid~.custom-control-label {
  color: #B03636;
}

.was-validated .custom-control-input:invalid~.custom-control-label::before,
.custom-control-input.is-invalid~.custom-control-label::before {
  border-color: #B03636;
}

.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,
.custom-control-input.is-invalid:checked~.custom-control-label::before {
  border-color: #c95050;
  background-color: #c95050;
}

.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,
.custom-control-input.is-invalid:focus~.custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(176, 54, 54, 0.25);
}

.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before,
.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before {
  border-color: #B03636;
}

.was-validated .custom-file-input:invalid~.custom-file-label,
.custom-file-input.is-invalid~.custom-file-label {
  border-color: #B03636;
}

.was-validated .custom-file-input:invalid:focus~.custom-file-label,
.custom-file-input.is-invalid:focus~.custom-file-label {
  border-color: #B03636;
  box-shadow: 0 0 0 0.2rem rgba(176, 54, 54, 0.25);
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.form-inline .form-check {
  width: 100%;
}

@media (min-width: 576px) {
  .form-inline label {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
  }
  .form-inline .form-group {
      display: flex;
      flex: 0 0 auto;
      flex-flow: row wrap;
      align-items: center;
      margin-bottom: 0;
  }
  .form-inline .form-control {
      display: inline-block;
      width: auto;
      vertical-align: middle;
  }
  .form-inline .form-control-plaintext {
      display: inline-block;
  }
  .form-inline .input-group,
  .form-inline .custom-select {
      width: auto;
  }
  .form-inline .form-check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      padding-left: 0;
  }
  .form-inline .form-check-input {
      position: relative;
      flex-shrink: 0;
      margin-top: 0;
      margin-right: 0.25rem;
      margin-left: 0;
  }
  .form-inline .custom-control {
      align-items: center;
      justify-content: center;
  }
  .form-inline .custom-control-label {
      margin-bottom: 0;
  }
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #b7b7b7;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: #2a2a2a;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
      transition: none;
  }
}

.btn:hover {
  color: #b7b7b7;
  text-decoration: none;
}

.btn:focus,
.btn.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.btn.disabled,
.btn:disabled {
  opacity: 0.65;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

a.btn.disabled,
fieldset:disabled a.btn {
  pointer-events: none;
}

.btn-primary {
  color: #fff;
  background-color: #ff00cc;
  border-color: #ff00cc;
}

.btn-primary:hover {
  color: #d1d1d1;
  background-color: #ab0387;
  ;
  border-color: #ab0387;
}

.btn-primary:focus,
.btn-primary.focus {
  color: #fff;
  background-color: #ab0387;
  border-color: #ab0387;
  box-shadow: 0 0 0 0.2rem #7a005f;
}

.btn-primary.disabled,
.btn-primary:disabled {
  color: #fff;
  background-color: #ab0387;
  border-color: #ab0387;
}

.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled).active,
.show>.btn-primary.dropdown-toggle {
  color: #fff;
  background-color: #ab0387;
  border-color: #ab0387;
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show>.btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem #7a005f;
}

.btn-secondary {
  color: #fff;
  background-color: #0993ec;
  border: 2px solid #0993ec;
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
}

.btn-secondary:hover {
  color: rgb(224, 224, 224);
  background-color: #056cb0;
  border-color: #056cb0;
}

.btn-secondary:focus,
.btn-secondary.focus {
  color: #fff;
  background-color: #056cb0;
  border-color: #056cb0;
  box-shadow: 0 0 0 0.2rem rgba(44, 144, 215, 0.5);
}

.btn-secondary.disabled,
.btn-secondary:disabled {
  color: #fff;
  background-color: #056cb0;
  border-color: #056cb0;
}

.btn-secondary:not(:disabled):not(.disabled):active,
.btn-secondary:not(:disabled):not(.disabled).active,
.show>.btn-secondary.dropdown-toggle {
  color: #fff;
  background-color: #056cb0;
  border-color: #056cb0;
}

.btn-secondary:not(:disabled):not(.disabled):active:focus,
.btn-secondary:not(:disabled):not(.disabled).active:focus,
.show>.btn-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(44, 144, 215, 0.5);
}

.btn-success {
  color: #fff;
  background-color: #2bc155;
  border-color: #2bc155;
}

.btn-success:hover {
  color: #fff;
  background-color: #24a247;
  border-color: #229743;
}

.btn-success:focus,
.btn-success.focus {
  color: #fff;
  background-color: #24a247;
  border-color: #229743;
  box-shadow: 0 0 0 0.2rem rgba(75, 202, 111, 0.5);
}

.btn-success.disabled,
.btn-success:disabled {
  color: #fff;
  background-color: #2bc155;
  border-color: #2bc155;
}

.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show>.btn-success.dropdown-toggle {
  color: #fff;
  background-color: #229743;
  border-color: #1f8d3e;
}

.btn-success:not(:disabled):not(.disabled):active:focus,
.btn-success:not(:disabled):not(.disabled).active:focus,
.show>.btn-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(75, 202, 111, 0.5);
}

.btn-info {
  color: #fff;
  background-color: #3C65F5;
  border-color: #3C65F5;
}

.btn-info:hover {
  color: #fff;
  background-color: #1848f3;
  border-color: #0c3ff2;
}

.btn-info:focus,
.btn-info.focus {
  color: #fff;
  background-color: #1848f3;
  border-color: #0c3ff2;
  box-shadow: 0 0 0 0.2rem rgba(89, 124, 247, 0.5);
}

.btn-info.disabled,
.btn-info:disabled {
  color: #fff;
  background-color: #3C65F5;
  border-color: #3C65F5;
}

.btn-info:not(:disabled):not(.disabled):active,
.btn-info:not(:disabled):not(.disabled).active,
.show>.btn-info.dropdown-toggle {
  color: #fff;
  background-color: #0c3ff2;
  border-color: #0c3ce5;
}

.btn-info:not(:disabled):not(.disabled):active:focus,
.btn-info:not(:disabled):not(.disabled).active:focus,
.show>.btn-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(89, 124, 247, 0.5);
}

.btn-warning {
  color: #212529;
  background-color: #FAFF00;
  border-color: #FAFF00;
}

.btn-warning:hover {
  color: #212529;
  background-color: #d5d900;
  border-color: #c8cc00;
}

.btn-warning:focus,
.btn-warning.focus {
  color: #212529;
  background-color: #d5d900;
  border-color: #c8cc00;
  box-shadow: 0 0 0 0.2rem rgba(217, 222, 6, 0.5);
}

.btn-warning.disabled,
.btn-warning:disabled {
  color: #212529;
  background-color: #FAFF00;
  border-color: #FAFF00;
}

.btn-warning:not(:disabled):not(.disabled):active,
.btn-warning:not(:disabled):not(.disabled).active,
.show>.btn-warning.dropdown-toggle {
  color: #212529;
  background-color: #c8cc00;
  border-color: #bcbf00;
}

.btn-warning:not(:disabled):not(.disabled):active:focus,
.btn-warning:not(:disabled):not(.disabled).active:focus,
.show>.btn-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(217, 222, 6, 0.5);
}

.btn-danger {
  color: #fff;
  background-color: #B03636;
  border-color: #B03636;
}

.btn-danger:hover {
  color: #fff;
  background-color: #932d2d;
  border-color: #892a2a;
}

.btn-danger:focus,
.btn-danger.focus {
  color: #fff;
  background-color: #932d2d;
  border-color: #892a2a;
  box-shadow: 0 0 0 0.2rem rgba(188, 84, 84, 0.5);
}

.btn-danger.disabled,
.btn-danger:disabled {
  color: #fff;
  background-color: #B03636;
  border-color: #B03636;
}

.btn-danger:not(:disabled):not(.disabled):active,
.btn-danger:not(:disabled):not(.disabled).active,
.show>.btn-danger.dropdown-toggle {
  color: #fff;
  background-color: #892a2a;
  border-color: #7f2727;
}

.btn-danger:not(:disabled):not(.disabled):active:focus,
.btn-danger:not(:disabled):not(.disabled).active:focus,
.show>.btn-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(188, 84, 84, 0.5);
}

.btn-light {
  color: #212529;
  background-color: #D1D1D1;
  border-color: #D1D1D1;
}

.btn-light:hover {
  color: #212529;
  background-color: #bebebe;
  border-color: #b8b8b8;
}

.btn-light:focus,
.btn-light.focus {
  color: #212529;
  background-color: #bebebe;
  border-color: #b8b8b8;
  box-shadow: 0 0 0 0.2rem rgba(183, 183, 184, 0.5);
}

.btn-light.disabled,
.btn-light:disabled {
  color: #212529;
  background-color: #D1D1D1;
  border-color: #D1D1D1;
}

.btn-light:not(:disabled):not(.disabled):active,
.btn-light:not(:disabled):not(.disabled).active,
.show>.btn-light.dropdown-toggle {
  color: #212529;
  background-color: #b8b8b8;
  border-color: #b1b1b1;
}

.btn-light:not(:disabled):not(.disabled):active:focus,
.btn-light:not(:disabled):not(.disabled).active:focus,
.show>.btn-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(183, 183, 184, 0.5);
}

.btn-dark {
  color: #fff;
  background-color: #3e4954;
  border-color: #3e4954;
}

.btn-dark:hover {
  color: #fff;
  background-color: #2e363e;
  border-color: #283037;
}

.btn-dark:focus,
.btn-dark.focus {
  color: #fff;
  background-color: #2e363e;
  border-color: #283037;
  box-shadow: 0 0 0 0.2rem rgba(91, 100, 110, 0.5);
}

.btn-dark.disabled,
.btn-dark:disabled {
  color: #fff;
  background-color: #3e4954;
  border-color: #3e4954;
}

.btn-dark:not(:disabled):not(.disabled):active,
.btn-dark:not(:disabled):not(.disabled).active,
.show>.btn-dark.dropdown-toggle {
  color: #fff;
  background-color: #283037;
  border-color: #23292f;
}

.btn-dark:not(:disabled):not(.disabled):active:focus,
.btn-dark:not(:disabled):not(.disabled).active:focus,
.show>.btn-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(91, 100, 110, 0.5);
}

.btn-outline-primary {
  color: #ff00c9;
  border-color: #ff00c9;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #ff00c9;
  border-color: #ff00c9;
}

.btn-outline-primary:focus,
.btn-outline-primary.focus {
  box-shadow: 0 0 0 0.2rem rgba(180, 19, 159, 0.5);
}

.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #ff00c9;
  background-color: transparent;
}

.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show>.btn-outline-primary.dropdown-toggle {
  color: #fff;
  background-color: #ff00c9;
  border-color: #ff00c9;
}

.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(180, 19, 159, 0.5);
}

.btn-outline-secondary {
  color: #D07407;
  border-color: #D07407;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #D07407;
  border-color: #D07407;
}

.btn-outline-secondary:focus,
.btn-outline-secondary.focus {
  box-shadow: 0 0 0 0.2rem rgba(208, 116, 7, 0.5);
}

.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #D07407;
  background-color: transparent;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active,
.btn-outline-secondary:not(:disabled):not(.disabled).active,
.show>.btn-outline-secondary.dropdown-toggle {
  color: #fff;
  background-color: #D07407;
  border-color: #D07407;
}

.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-secondary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(208, 116, 7, 0.5);
}

.btn-outline-success {
  color: #2bc155;
  border-color: #2bc155;
}

.btn-outline-success:hover {
  color: #fff;
  background-color: #2bc155;
  border-color: #2bc155;
}

.btn-outline-success:focus,
.btn-outline-success.focus {
  box-shadow: 0 0 0 0.2rem rgba(43, 193, 85, 0.5);
}

.btn-outline-success.disabled,
.btn-outline-success:disabled {
  color: #2bc155;
  background-color: transparent;
}

.btn-outline-success:not(:disabled):not(.disabled):active,
.btn-outline-success:not(:disabled):not(.disabled).active,
.show>.btn-outline-success.dropdown-toggle {
  color: #fff;
  background-color: #2bc155;
  border-color: #2bc155;
}

.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-success.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(43, 193, 85, 0.5);
}

.btn-outline-info {
  color: #3C65F5;
  border-color: #3C65F5;
}

.btn-outline-info:hover {
  color: #fff;
  background-color: #3C65F5;
  border-color: #3C65F5;
}

.btn-outline-info:focus,
.btn-outline-info.focus {
  box-shadow: 0 0 0 0.2rem rgba(60, 101, 245, 0.5);
}

.btn-outline-info.disabled,
.btn-outline-info:disabled {
  color: #3C65F5;
  background-color: transparent;
}

.btn-outline-info:not(:disabled):not(.disabled):active,
.btn-outline-info:not(:disabled):not(.disabled).active,
.show>.btn-outline-info.dropdown-toggle {
  color: #fff;
  background-color: #3C65F5;
  border-color: #3C65F5;
}

.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-info.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(60, 101, 245, 0.5);
}

.btn-outline-warning {
  color: #FAFF00;
  border-color: #FAFF00;
}

.btn-outline-warning:hover {
  color: #212529;
  background-color: #FAFF00;
  border-color: #FAFF00;
}

.btn-outline-warning:focus,
.btn-outline-warning.focus {
  box-shadow: 0 0 0 0.2rem rgba(250, 255, 0, 0.5);
}

.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
  color: #FAFF00;
  background-color: transparent;
}

.btn-outline-warning:not(:disabled):not(.disabled):active,
.btn-outline-warning:not(:disabled):not(.disabled).active,
.show>.btn-outline-warning.dropdown-toggle {
  color: #212529;
  background-color: #FAFF00;
  border-color: #FAFF00;
}

.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-warning.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(250, 255, 0, 0.5);
}

.btn-outline-danger {
  color: #B03636;
  border-color: #B03636;
}

.btn-outline-danger:hover {
  color: #fff;
  background-color: #B03636;
  border-color: #B03636;
}

.btn-outline-danger:focus,
.btn-outline-danger.focus {
  box-shadow: 0 0 0 0.2rem rgba(176, 54, 54, 0.5);
}

.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
  color: #B03636;
  background-color: transparent;
}

.btn-outline-danger:not(:disabled):not(.disabled):active,
.btn-outline-danger:not(:disabled):not(.disabled).active,
.show>.btn-outline-danger.dropdown-toggle {
  color: #fff;
  background-color: #B03636;
  border-color: #B03636;
}

.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-danger.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(176, 54, 54, 0.5);
}

.btn-outline-light {
  color: #D1D1D1;
  border-color: #D1D1D1;
}

.btn-outline-light:hover {
  color: #212529;
  background-color: #D1D1D1;
  border-color: #D1D1D1;
}

.btn-outline-light:focus,
.btn-outline-light.focus {
  box-shadow: 0 0 0 0.2rem rgba(209, 209, 209, 0.5);
}

.btn-outline-light.disabled,
.btn-outline-light:disabled {
  color: #D1D1D1;
  background-color: transparent;
}

.btn-outline-light:not(:disabled):not(.disabled):active,
.btn-outline-light:not(:disabled):not(.disabled).active,
.show>.btn-outline-light.dropdown-toggle {
  color: #212529;
  background-color: #D1D1D1;
  border-color: #D1D1D1;
}

.btn-outline-light:not(:disabled):not(.disabled):active:focus,
.btn-outline-light:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-light.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(209, 209, 209, 0.5);
}

.btn-outline-dark {
  color: #3e4954;
  border-color: #3e4954;
}

.btn-outline-dark:hover {
  color: #fff;
  background-color: #3e4954;
  border-color: #3e4954;
}

.btn-outline-dark:focus,
.btn-outline-dark.focus {
  box-shadow: 0 0 0 0.2rem rgba(62, 73, 84, 0.5);
}

.btn-outline-dark.disabled,
.btn-outline-dark:disabled {
  color: #3e4954;
  background-color: transparent;
}

.btn-outline-dark:not(:disabled):not(.disabled):active,
.btn-outline-dark:not(:disabled):not(.disabled).active,
.show>.btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #3e4954;
  border-color: #3e4954;
}

.btn-outline-dark:not(:disabled):not(.disabled):active:focus,
.btn-outline-dark:not(:disabled):not(.disabled).active:focus,
.show>.btn-outline-dark.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(62, 73, 84, 0.5);
}

.btn-link {
  font-weight: 400;
  color: #43c4d3;
  text-decoration: none;
}

.btn-link:hover {
  color: #0c6f5d;
  text-decoration: underline;
}

.btn-link:focus,
.btn-link.focus {
  text-decoration: underline;
}

.btn-link:disabled,
.btn-link.disabled {
  color: #6c757d;
  pointer-events: none;
}

.btn-lg,
.btn-group-lg>.btn {
  padding: 0.5rem 1rem;
  font-size: 1.09375rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn-sm,
.btn-group-sm>.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-block+.btn-block {
  margin-top: 0.5rem;
}

input[type="submit"].btn-block,
input[type="reset"].btn-block,
input[type="button"].btn-block {
  width: 100%;
}

.fade {
  transition: opacity 0.15s linear;
}

@media (prefers-reduced-motion: reduce) {
  .fade {
      transition: none;
  }
}

.fade:not(.show) {
  opacity: 0;
}

.collapse:not(.show) {
  display: none;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
  .collapsing {
      transition: none;
  }
}

.dropup,
.dropright,
.dropdown,
.dropleft {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}

.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 0.125rem 0 0;
  font-size: 0.875rem;
  color: #b7b7b7;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.75rem;
}

.dropdown-menu-left {
  right: auto;
  left: 0;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-left {
      right: auto;
      left: 0;
  }
  .dropdown-menu-sm-right {
      right: 0;
      left: auto;
  }
}

@media (min-width: 768px) {
  .dropdown-menu-md-left {
      right: auto;
      left: 0;
  }
  .dropdown-menu-md-right {
      right: 0;
      left: auto;
  }
}

@media (min-width: 992px) {
  .dropdown-menu-lg-left {
      right: auto;
      left: 0;
  }
  .dropdown-menu-lg-right {
      right: 0;
      left: auto;
  }
}

@media (min-width: 1200px) {
  .dropdown-menu-xl-left {
      right: auto;
      left: 0;
  }
  .dropdown-menu-xl-right {
      right: 0;
      left: auto;
  }
}

@media (min-width: 1440) {
  .dropdown-menu-xxl-left {
      right: auto;
      left: 0;
  }
  .dropdown-menu-xxl-right {
      right: 0;
      left: auto;
  }
}

.dropup .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 0.125rem;
}

.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-menu {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: 0.125rem;
}

.dropright .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}

.dropright .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropright .dropdown-toggle::after {
  vertical-align: 0;
}

.dropleft .dropdown-menu {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: 0.125rem;
}

.dropleft .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}

.dropleft .dropdown-toggle::after {
  display: none;
}

.dropleft .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-menu[x-placement^="top"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1.5rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #16181b;
  text-decoration: none;
  background-color: #f8f9fa;
}

.dropdown-item.active,
.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #43c4d3;
}

.dropdown-item.disabled,
.dropdown-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-header {
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.765625rem;
  color: #6c757d;
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: 0.25rem 1.5rem;
  color: #212529;
}

.btn-group,
.btn-group-vertical {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.btn-group>.btn,
.btn-group-vertical>.btn {
  position: relative;
  flex: 1 1 auto;
}

.btn-group>.btn:hover,
.btn-group-vertical>.btn:hover {
  z-index: 1;
}

.btn-group>.btn:focus,
.btn-group>.btn:active,
.btn-group>.btn.active,
.btn-group-vertical>.btn:focus,
.btn-group-vertical>.btn:active,
.btn-group-vertical>.btn.active {
  z-index: 1;
}

.btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.btn-toolbar .input-group {
  width: auto;
}

.btn-group>.btn:not(:first-child),
.btn-group>.btn-group:not(:first-child) {
  margin-left: -1px;
}

.btn-group>.btn:not(:last-child):not(.dropdown-toggle),
.btn-group>.btn-group:not(:last-child)>.btn {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.btn-group>.btn:not(:first-child),
.btn-group>.btn-group:not(:first-child)>.btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.dropdown-toggle-split {
  padding-right: 0.5625rem;
  padding-left: 0.5625rem;
}

.dropdown-toggle-split::after,
.dropup .dropdown-toggle-split::after,
.dropright .dropdown-toggle-split::after {
  margin-left: 0;
}

.dropleft .dropdown-toggle-split::before {
  margin-right: 0;
}

.btn-sm+.dropdown-toggle-split,
.btn-group-sm>.btn+.dropdown-toggle-split {
  padding-right: 0.375rem;
  padding-left: 0.375rem;
}

.btn-lg+.dropdown-toggle-split,
.btn-group-lg>.btn+.dropdown-toggle-split {
  padding-right: 0.75rem;
  padding-left: 0.75rem;
}

.btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.btn-group-vertical>.btn,
.btn-group-vertical>.btn-group {
  width: 100%;
}

.btn-group-vertical>.btn:not(:first-child),
.btn-group-vertical>.btn-group:not(:first-child) {
  margin-top: -1px;
}

.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),
.btn-group-vertical>.btn-group:not(:last-child)>.btn {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.btn-group-vertical>.btn:not(:first-child),
.btn-group-vertical>.btn-group:not(:first-child)>.btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-group-toggle>.btn,
.btn-group-toggle>.btn-group>.btn {
  margin-bottom: 0;
}

.btn-group-toggle>.btn input[type="radio"],
.btn-group-toggle>.btn input[type="checkbox"],
.btn-group-toggle>.btn-group>.btn input[type="radio"],
.btn-group-toggle>.btn-group>.btn input[type="checkbox"] {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.input-group>.form-control,
.input-group>.form-control-plaintext,
.input-group>.custom-select,
.input-group>.custom-file {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
  margin-bottom: 0;
}

.input-group>.form-control+.form-control,
.input-group>.form-control+.custom-select,
.input-group>.form-control+.custom-file,
.input-group>.form-control-plaintext+.form-control,
.input-group>.form-control-plaintext+.custom-select,
.input-group>.form-control-plaintext+.custom-file,
.input-group>.custom-select+.form-control,
.input-group>.custom-select+.custom-select,
.input-group>.custom-select+.custom-file,
.input-group>.custom-file+.form-control,
.input-group>.custom-file+.custom-select,
.input-group>.custom-file+.custom-file {
  margin-left: -1px;
}

.input-group>.form-control:focus,
.input-group>.custom-select:focus,
.input-group>.custom-file .custom-file-input:focus~.custom-file-label {
  z-index: 3;
}

.input-group>.custom-file .custom-file-input:focus {
  z-index: 4;
}

.input-group>.form-control:not(:last-child),
.input-group>.custom-select:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.form-control:not(:first-child),
.input-group>.custom-select:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group>.custom-file {
  display: flex;
  align-items: center;
}

.input-group>.custom-file:not(:last-child) .custom-file-label,
.input-group>.custom-file:not(:last-child) .custom-file-label::after {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend,
.input-group-append {
  display: flex;
}

.input-group-prepend .btn,
.input-group-append .btn {
  position: relative;
  z-index: 2;
}

.input-group-prepend .btn:focus,
.input-group-append .btn:focus {
  z-index: 3;
}

.input-group-prepend .btn+.btn,
.input-group-prepend .btn+.input-group-text,
.input-group-prepend .input-group-text+.input-group-text,
.input-group-prepend .input-group-text+.btn,
.input-group-append .btn+.btn,
.input-group-append .btn+.input-group-text,
.input-group-append .input-group-text+.input-group-text,
.input-group-append .input-group-text+.btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-append {
  margin-left: -1px;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  text-align: center;
  white-space: nowrap;
  background-color: #e9ecef;
  border: 1px solid #d7dae3;
  border-radius: 0.75rem;
}

.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
  margin-top: 0;
}

.input-group-lg>.form-control:not(textarea),
.input-group-lg>.custom-select {
  height: calc(1.5em + 1rem + 2px);
}

.input-group-lg>.form-control,
.input-group-lg>.custom-select,
.input-group-lg>.input-group-prepend>.input-group-text,
.input-group-lg>.input-group-append>.input-group-text,
.input-group-lg>.input-group-prepend>.btn,
.input-group-lg>.input-group-append>.btn {
  padding: 0.5rem 1rem;
  font-size: 1.09375rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.input-group-sm>.form-control:not(textarea),
.input-group-sm>.custom-select {
  height: calc(1.5em + 0.5rem + 2px);
}

.input-group-sm>.form-control,
.input-group-sm>.custom-select,
.input-group-sm>.input-group-prepend>.input-group-text,
.input-group-sm>.input-group-append>.input-group-text,
.input-group-sm>.input-group-prepend>.btn,
.input-group-sm>.input-group-append>.btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.input-group-lg>.custom-select,
.input-group-sm>.custom-select {
  padding-right: 1.75rem;
}

.input-group>.input-group-prepend>.btn,
.input-group>.input-group-prepend>.input-group-text,
.input-group>.input-group-append:not(:last-child)>.btn,
.input-group>.input-group-append:not(:last-child)>.input-group-text,
.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),
.input-group>.input-group-append:last-child>.input-group-text:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group>.input-group-append>.btn,
.input-group>.input-group-append>.input-group-text,
.input-group>.input-group-prepend:not(:first-child)>.btn,
.input-group>.input-group-prepend:not(:first-child)>.input-group-text,
.input-group>.input-group-prepend:first-child>.btn:not(:first-child),
.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.custom-control {
  position: relative;
  z-index: 1;
  display: block;
  min-height: 1.3125rem;
  padding-left: 1.5rem;
  color-adjust: exact;
}

.custom-control-inline {
  display: inline-flex;
  margin-right: 1rem;
}

.custom-control-input {
  position: absolute;
  left: 0;
  z-index: -1;
  width: 1rem;
  height: 1.15625rem;
  opacity: 0;
}

.custom-control-input:checked~.custom-control-label::before {
  color: #fff;
  border-color: #43c4d3;
  background-color: #43c4d3;
}

.custom-control-input:focus~.custom-control-label::before {
  box-shadow: 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.custom-control-input:focus:not(:checked)~.custom-control-label::before {
  border-color: #59edd3;
}

.custom-control-input:not(:disabled):active~.custom-control-label::before {
  color: #fff;
  background-color: #87f2df;
  border-color: #87f2df;
}

.custom-control-input[disabled]~.custom-control-label,
.custom-control-input:disabled~.custom-control-label {
  color: #6c757d;
}

.custom-control-input[disabled]~.custom-control-label::before,
.custom-control-input:disabled~.custom-control-label::before {
  background-color: #e9ecef;
}

.custom-control-label {
  position: relative;
  margin-bottom: 0;
  vertical-align: top;
}

.custom-control-label::before {
  position: absolute;
  top: 0.15625rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  content: "";
  background-color: #fff;
  border: #adb5bd solid 1px;
}

.custom-control-label::after {
  position: absolute;
  top: 0.15625rem;
  left: -1.5rem;
  display: block;
  width: 1rem;
  height: 1rem;
  content: "";
  background: no-repeat 50% / 50% 50%;
}

.custom-checkbox .custom-control-label::before {
  border-radius: 0.75rem;
}

.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before {
  border-color: #43c4d3;
  background-color: #43c4d3;
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e");
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(19, 180, 151, 0.5);
}

.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before {
  background-color: rgba(19, 180, 151, 0.5);
}

.custom-radio .custom-control-label::before {
  border-radius: 50%;
}

.custom-radio .custom-control-input:checked~.custom-control-label::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(19, 180, 151, 0.5);
}

.custom-switch {
  padding-left: 2.25rem;
}

.custom-switch .custom-control-label::before {
  left: -2.25rem;
  width: 1.75rem;
  pointer-events: all;
  border-radius: 0.5rem;
}

.custom-switch .custom-control-label::after {
  top: calc(0.15625rem + 2px);
  left: calc(-2.25rem + 2px);
  width: calc(1rem - 4px);
  height: calc(1rem - 4px);
  background-color: #adb5bd;
  border-radius: 0.5rem;
  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-switch .custom-control-label::after {
      transition: none;
  }
}

.custom-switch .custom-control-input:checked~.custom-control-label::after {
  background-color: #fff;
  transform: translateX(0.75rem);
}

.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before {
  background-color: rgba(19, 180, 151, 0.5);
}

.custom-select {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right 0.75rem center/8px 10px;
  border: 1px solid #d7dae3;
  border-radius: 0.75rem;
  appearance: none;
}

.custom-select:focus {
  border-color: #59edd3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.custom-select:focus::-ms-value {
  color: #495057;
  background-color: #fff;
}

.custom-select[multiple],
.custom-select[size]:not([size="1"]) {
  height: auto;
  padding-right: 0.75rem;
  background-image: none;
}

.custom-select:disabled {
  color: #6c757d;
  background-color: #e9ecef;
}

.custom-select::-ms-expand {
  display: none;
}

.custom-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.custom-select-sm {
  height: calc(1.5em + 0.5rem + 2px);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.765625rem;
}

.custom-select-lg {
  height: calc(1.5em + 1rem + 2px);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.09375rem;
}

.custom-file {
  position: relative;
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin-bottom: 0;
}

.custom-file-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  margin: 0;
  opacity: 0;
}

.custom-file-input:focus~.custom-file-label {
  border-color: #59edd3;
  box-shadow: 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.custom-file-input[disabled]~.custom-file-label,
.custom-file-input:disabled~.custom-file-label {
  background-color: #e9ecef;
}

.custom-file-input:lang(en)~.custom-file-label::after {
  content: "Browse";
}

.custom-file-input~.custom-file-label[data-browse]::after {
  content: attr(data-browse);
}

.custom-file-label {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #d7dae3;
  border-radius: 0.75rem;
}

.custom-file-label::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: block;
  height: calc(1.5em + 0.75rem);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  content: "Browse";
  background-color: #e9ecef;
  border-left: inherit;
  border-radius: 0 0.75rem 0.75rem 0;
}

.custom-range {
  width: 100%;
  height: 1.4rem;
  padding: 0;
  background-color: transparent;
  appearance: none;
}

.custom-range:focus {
  outline: none;
}

.custom-range:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 1px #F6FBF8, 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.custom-range:focus::-moz-range-thumb {
  box-shadow: 0 0 0 1px #F6FBF8, 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.custom-range:focus::-ms-thumb {
  box-shadow: 0 0 0 1px #F6FBF8, 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.custom-range::-moz-focus-outer {
  border: 0;
}

.custom-range::-webkit-slider-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: -0.25rem;
  background-color: #43c4d3;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-webkit-slider-thumb {
      transition: none;
  }
}

.custom-range::-webkit-slider-thumb:active {
  background-color: #87f2df;
}

.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-moz-range-thumb {
  width: 1rem;
  height: 1rem;
  background-color: #43c4d3;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-moz-range-thumb {
      transition: none;
  }
}

.custom-range::-moz-range-thumb:active {
  background-color: #87f2df;
}

.custom-range::-moz-range-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: #dee2e6;
  border-color: transparent;
  border-radius: 1rem;
}

.custom-range::-ms-thumb {
  width: 1rem;
  height: 1rem;
  margin-top: 0;
  margin-right: 0.2rem;
  margin-left: 0.2rem;
  background-color: #43c4d3;
  border: 0;
  border-radius: 1rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
}

@media (prefers-reduced-motion: reduce) {
  .custom-range::-ms-thumb {
      transition: none;
  }
}

.custom-range::-ms-thumb:active {
  background-color: #87f2df;
}

.custom-range::-ms-track {
  width: 100%;
  height: 0.5rem;
  color: transparent;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  border-width: 0.5rem;
}

.custom-range::-ms-fill-lower {
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range::-ms-fill-upper {
  margin-right: 15px;
  background-color: #dee2e6;
  border-radius: 1rem;
}

.custom-range:disabled::-webkit-slider-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-webkit-slider-runnable-track {
  cursor: default;
}

.custom-range:disabled::-moz-range-thumb {
  background-color: #adb5bd;
}

.custom-range:disabled::-moz-range-track {
  cursor: default;
}

.custom-range:disabled::-ms-thumb {
  background-color: #adb5bd;
}

.custom-control-label::before,
.custom-file-label,
.custom-select {
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .custom-control-label::before,
  .custom-file-label,
  .custom-select {
      transition: none;
  }
}

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: 0rem 0rem;
}

.nav-link:hover,
.nav-link:focus {
  text-decoration: none;
  background-color: #660853;
}

.nav-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav-tabs {
  /* border-bottom: 1px solid #dee2e6; */
}

.nav-tabs .nav-item {
  margin-bottom: -1px;
}

.nav-tabs .nav-link {
  padding: 15px;
  border: 1px solid transparent;
  /* border-top-left-radius: 0.75rem; */
  font-weight: 500;
  /* border-top-right-radius: 0.75rem; */
}

.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #ffffff;
  background-color: #ff00cb;
  /* border-color: #dee2e6 #dee2e6 #F6FBF8; */
}

.nav-tabs .dropdown-menu {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.nav-pills .nav-link {
  border-radius: 0.75rem;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  color: #fff;
  background-color: #43c4d3;
}

.nav-fill>.nav-link,
.nav-fill .nav-item {
  flex: 1 1 auto;
  text-align: center;
}

.nav-justified>.nav-link,
.nav-justified .nav-item {
  /* flex-basis: 0; */
  /* flex-grow: 1; */
  text-align: center;
  margin: 10px;
  display: flex;
}

.tab-content>.tab-pane {
  display: none;
}

.tab-content>.active {
  display: block;
}

.navbar {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
}

.navbar .container,
.navbar .container-fluid,
.navbar .container-sm,
.navbar .container-md,
.navbar .container-lg,
.navbar .container-xl {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: inline-block;
  padding-top: 0.3359375rem;
  padding-bottom: 0.3359375rem;
  margin-right: 1rem;
  font-size: 1.09375rem;
  line-height: inherit;
  white-space: nowrap;
}

.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

.navbar-text {
  display: inline-block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.navbar-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.09375rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.75rem;
}

.navbar-toggler:hover,
.navbar-toggler:focus {
  text-decoration: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: 100% 100%;
}

@media (max-width: 575.98px) {
  .navbar-expand-sm>.container,
  .navbar-expand-sm>.container-fluid,
  .navbar-expand-sm>.container-sm,
  .navbar-expand-sm>.container-md,
  .navbar-expand-sm>.container-lg,
  .navbar-expand-sm>.container-xl {
      padding-right: 0;
      padding-left: 0;
  }
}

@media (min-width: 576px) {
  .navbar-expand-sm {
      flex-flow: row nowrap;
      justify-content: flex-start;
  }
  .navbar-expand-sm .navbar-nav {
      flex-direction: row;
  }
  .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
  }
  .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
  }
  .navbar-expand-sm>.container,
  .navbar-expand-sm>.container-fluid,
  .navbar-expand-sm>.container-sm,
  .navbar-expand-sm>.container-md,
  .navbar-expand-sm>.container-lg,
  .navbar-expand-sm>.container-xl {
      flex-wrap: nowrap;
  }
  .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
  }
  .navbar-expand-sm .navbar-toggler {
      display: none;
  }
}

@media (max-width: 767.98px) {
  .navbar-expand-md>.container,
  .navbar-expand-md>.container-fluid,
  .navbar-expand-md>.container-sm,
  .navbar-expand-md>.container-md,
  .navbar-expand-md>.container-lg,
  .navbar-expand-md>.container-xl {
      padding-right: 0;
      padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
      flex-flow: row nowrap;
      justify-content: flex-start;
  }
  .navbar-expand-md .navbar-nav {
      flex-direction: row;
  }
  .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
  }
  .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
  }
  .navbar-expand-md>.container,
  .navbar-expand-md>.container-fluid,
  .navbar-expand-md>.container-sm,
  .navbar-expand-md>.container-md,
  .navbar-expand-md>.container-lg,
  .navbar-expand-md>.container-xl {
      flex-wrap: nowrap;
  }
  .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
  }
  .navbar-expand-md .navbar-toggler {
      display: none;
  }
}

@media (max-width: 991.98px) {
  .navbar-expand-lg>.container,
  .navbar-expand-lg>.container-fluid,
  .navbar-expand-lg>.container-sm,
  .navbar-expand-lg>.container-md,
  .navbar-expand-lg>.container-lg,
  .navbar-expand-lg>.container-xl {
      padding-right: 0;
      padding-left: 0;
  }
}

@media (min-width: 992px) {
  .navbar-expand-lg {
      flex-flow: row nowrap;
      justify-content: flex-start;
  }
  .navbar-expand-lg .navbar-nav {
      flex-direction: row;
  }
  .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
  }
  .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
  }
  .navbar-expand-lg>.container,
  .navbar-expand-lg>.container-fluid,
  .navbar-expand-lg>.container-sm,
  .navbar-expand-lg>.container-md,
  .navbar-expand-lg>.container-lg,
  .navbar-expand-lg>.container-xl {
      flex-wrap: nowrap;
  }
  .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
  }
  .navbar-expand-lg .navbar-toggler {
      display: none;
  }
}

@media (max-width: 1199.98px) {
  .navbar-expand-xl>.container,
  .navbar-expand-xl>.container-fluid,
  .navbar-expand-xl>.container-sm,
  .navbar-expand-xl>.container-md,
  .navbar-expand-xl>.container-lg,
  .navbar-expand-xl>.container-xl {
      padding-right: 0;
      padding-left: 0;
  }
}

@media (min-width: 1200px) {
  .navbar-expand-xl {
      flex-flow: row nowrap;
      justify-content: flex-start;
  }
  .navbar-expand-xl .navbar-nav {
      flex-direction: row;
  }
  .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
  }
  .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
  }
  .navbar-expand-xl>.container,
  .navbar-expand-xl>.container-fluid,
  .navbar-expand-xl>.container-sm,
  .navbar-expand-xl>.container-md,
  .navbar-expand-xl>.container-lg,
  .navbar-expand-xl>.container-xl {
      flex-wrap: nowrap;
  }
  .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
  }
  .navbar-expand-xl .navbar-toggler {
      display: none;
  }
}

@media (max-width: 1439.98) {
  .navbar-expand-xxl>.container,
  .navbar-expand-xxl>.container-fluid,
  .navbar-expand-xxl>.container-sm,
  .navbar-expand-xxl>.container-md,
  .navbar-expand-xxl>.container-lg,
  .navbar-expand-xxl>.container-xl {
      padding-right: 0;
      padding-left: 0;
  }
}

@media (min-width: 1440) {
  .navbar-expand-xxl {
      flex-flow: row nowrap;
      justify-content: flex-start;
  }
  .navbar-expand-xxl .navbar-nav {
      flex-direction: row;
  }
  .navbar-expand-xxl .navbar-nav .dropdown-menu {
      position: absolute;
  }
  .navbar-expand-xxl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
  }
  .navbar-expand-xxl>.container,
  .navbar-expand-xxl>.container-fluid,
  .navbar-expand-xxl>.container-sm,
  .navbar-expand-xxl>.container-md,
  .navbar-expand-xxl>.container-lg,
  .navbar-expand-xxl>.container-xl {
      flex-wrap: nowrap;
  }
  .navbar-expand-xxl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
  }
  .navbar-expand-xxl .navbar-toggler {
      display: none;
  }
}

.navbar-expand {
  flex-flow: row nowrap;
  justify-content: flex-start;
}

.navbar-expand>.container,
.navbar-expand>.container-fluid,
.navbar-expand>.container-sm,
.navbar-expand>.container-md,
.navbar-expand>.container-lg,
.navbar-expand>.container-xl {
  padding-right: 0;
  padding-left: 0;
}

.navbar-expand .navbar-nav {
  flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
  position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.navbar-expand>.container,
.navbar-expand>.container-fluid,
.navbar-expand>.container-sm,
.navbar-expand>.container-md,
.navbar-expand>.container-lg,
.navbar-expand>.container-xl {
  flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
  display: flex !important;
  flex-basis: auto;
}

.navbar-expand .navbar-toggler {
  display: none;
}

.navbar-light .navbar-brand {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-nav .nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: rgba(0, 0, 0, 0.7);
}

.navbar-light .navbar-nav .nav-link.disabled {
  color: rgba(0, 0, 0, 0.3);
}

.navbar-light .navbar-nav .show>.nav-link,
.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-toggler {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-light .navbar-text {
  color: rgba(0, 0, 0, 0.5);
}

.navbar-light .navbar-text a {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
  color: rgba(0, 0, 0, 0.9);
}

.navbar-dark .navbar-brand {
  color: #fff;
}

.navbar-dark .navbar-brand:hover,
.navbar-dark .navbar-brand:focus {
  color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
  color: rgba(255, 255, 255, 0.25);
}

.navbar-dark .navbar-nav .show>.nav-link,
.navbar-dark .navbar-nav .active>.nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #fff;
}

.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 0.5);
}

.navbar-dark .navbar-text a {
  color: #fff;
}

.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
  color: #fff;
}

h4 {
  font-size: 22px!important;
  font-weight: 900;
}

.card span {
  font-size: 12px;
  line-height: 1rem;
  color: #fff;
}

.card>hr {
  margin-right: 0;
  margin-left: 0;
}

.card>.list-group {
  border-top: inherit;
  border-bottom: inherit;
}

.card>.list-group:first-child {
  border-top-width: 0;
  border-top-left-radius: calc(0.75rem - 1px);
  border-top-right-radius: calc(0.75rem - 1px);
}

.card>.list-group:last-child {
  border-bottom-width: 0;
  border-bottom-right-radius: calc(0.75rem - 1px);
  border-bottom-left-radius: calc(0.75rem - 1px);
}

.card>.card-header+.list-group,
.card>.list-group+.card-footer {
  border-top: 0;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
}

.card-title {
  margin-bottom: 0.75rem;
}

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0;
}

.card-text:last-child {
  margin-bottom: 0;
}

.card-link:hover {
  text-decoration: none;
}

.card-link+.card-link {
  margin-left: 1.25rem;
}

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  
}

.card-header:first-child {
  border-radius: calc(0.75rem - 1px) calc(0.75rem - 1px) 0 0;
}

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.card-footer:last-child {
  border-radius: 0 0 calc(0.75rem - 1px) calc(0.75rem - 1px);
}

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0;
}

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem;
}

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: calc(0.75rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
  flex-shrink: 0;
  width: 100%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.75rem - 1px);
  border-top-right-radius: calc(0.75rem - 1px);
}

.card-img,
.card-img-bottom {
  border-bottom-right-radius: calc(0.75rem - 1px);
  border-bottom-left-radius: calc(0.75rem - 1px);
}

.card-deck .card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-deck {
      display: flex;
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
  }
  .card-deck .card {
      flex: 1 0 0%;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
  }
}

.card-group>.card {
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .card-group {
      display: flex;
      flex-flow: row wrap;
  }
  .card-group>.card {
      flex: 1 0 0%;
      margin-bottom: 0;
  }
  .card-group>.card+.card {
      margin-left: 0;
      border-left: 0;
  }
  .card-group>.card:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
  }
  .card-group>.card:not(:last-child) .card-img-top,
  .card-group>.card:not(:last-child) .card-header {
      border-top-right-radius: 0;
  }
  .card-group>.card:not(:last-child) .card-img-bottom,
  .card-group>.card:not(:last-child) .card-footer {
      border-bottom-right-radius: 0;
  }
  .card-group>.card:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
  }
  .card-group>.card:not(:first-child) .card-img-top,
  .card-group>.card:not(:first-child) .card-header {
      border-top-left-radius: 0;
  }
  .card-group>.card:not(:first-child) .card-img-bottom,
  .card-group>.card:not(:first-child) .card-footer {
      border-bottom-left-radius: 0;
  }
}

.card-columns .card {
  margin-bottom: 0.75rem;
}

@media (min-width: 576px) {
  .card-columns {
      column-count: 3;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1;
  }
  .card-columns .card {
      display: inline-block;
      width: 100%;
  }
}

.accordion {
  overflow-anchor: none;
}

.accordion>.card {
  overflow: hidden;
}

.accordion>.card:not(:last-of-type) {
  border-bottom: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.accordion>.card:not(:first-of-type) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.accordion>.card>.card-header {
  border-radius: 0;
  margin-bottom: -1px;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  list-style: none;
  background-color: #e9ecef;
  border-radius: 0.75rem;
}

.breadcrumb-item {
  display: flex;
}

.breadcrumb-item+.breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item+.breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item+.breadcrumb-item:hover::before {
  text-decoration: underline;
}

.breadcrumb-item+.breadcrumb-item:hover::before {
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #6c757d;
}

.pagination {
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.75rem;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #43c4d3;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.page-link:hover {
  z-index: 2;
  color: #0c6f5d;
  text-decoration: none;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-link:focus {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(19, 180, 151, 0.25);
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #43c4d3;
  border-color: #43c4d3;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.pagination-lg .page-link {
  padding: 0.75rem 1.5rem;
  font-size: 1.09375rem;
  line-height: 1.5;
}

.pagination-lg .page-item:first-child .page-link {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}

.pagination-lg .page-item:last-child .page-link {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.pagination-sm .page-link {
  padding: 0.25rem 0.5rem;
  font-size: 0.765625rem;
  line-height: 1.5;
}

.pagination-sm .page-item:first-child .page-link {
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
}

.pagination-sm .page-item:last-child .page-link {
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.75rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .badge {
      transition: none;
  }
}

a.badge:hover,
a.badge:focus {
  text-decoration: none;
}

.badge:empty {
  display: none;
}

.btn .badge {
  position: relative;
  top: -1px;
}

.badge-pill {
  padding-right: 0.6em;
  padding-left: 0.6em;
  border-radius: 10rem;
}

.badge-primary {
  color: #fff;
  background-color: #43c4d3;
}

a.badge-primary:hover,
a.badge-primary:focus {
  color: #fff;
  background-color: #0e8670;
}

a.badge-primary:focus,
a.badge-primary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(19, 180, 151, 0.5);
}

.badge-secondary {
  color: #fff;
  background-color: #D07407;
}

a.badge-secondary:hover,
a.badge-secondary:focus {
  color: #fff;
  background-color: #9f5805;
}

a.badge-secondary:focus,
a.badge-secondary.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(208, 116, 7, 0.5);
}

.badge-success {
  color: #fff;
  background-color: #2bc155;
}

a.badge-success:hover,
a.badge-success:focus {
  color: #fff;
  background-color: #229743;
}

a.badge-success:focus,
a.badge-success.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(43, 193, 85, 0.5);
}

.badge-info {
  color: #fff;
  background-color: #3C65F5;
}

a.badge-info:hover,
a.badge-info:focus {
  color: #fff;
  background-color: #0c3ff2;
}

a.badge-info:focus,
a.badge-info.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(60, 101, 245, 0.5);
}

.badge-warning {
  color: #212529;
  background-color: #FAFF00;
}

a.badge-warning:hover,
a.badge-warning:focus {
  color: #212529;
  background-color: #c8cc00;
}

a.badge-warning:focus,
a.badge-warning.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(250, 255, 0, 0.5);
}

.badge-danger {
  color: #fff;
  background-color: #B03636;
}

a.badge-danger:hover,
a.badge-danger:focus {
  color: #fff;
  background-color: #892a2a;
}

a.badge-danger:focus,
a.badge-danger.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(176, 54, 54, 0.5);
}

.badge-light {
  color: #212529;
  background-color: #D1D1D1;
}

a.badge-light:hover,
a.badge-light:focus {
  color: #212529;
  background-color: #b8b8b8;
}

a.badge-light:focus,
a.badge-light.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(209, 209, 209, 0.5);
}

.badge-dark {
  color: #fff;
  background-color: #3e4954;
}

a.badge-dark:hover,
a.badge-dark:focus {
  color: #fff;
  background-color: #283037;
}

a.badge-dark:focus,
a.badge-dark.focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(62, 73, 84, 0.5);
}

.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}

@media (min-width: 576px) {
  .jumbotron {
      padding: 4rem 2rem;
  }
}

.jumbotron-fluid {
  padding-right: 0;
  padding-left: 0;
  border-radius: 0;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.75rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3.8125rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #0a5e4f;
  background-color: #d0f0ea;
  border-color: #bdeae2;
}

.alert-primary hr {
  border-top-color: #aae4da;
}

.alert-primary .alert-link {
  color: #053028;
}

.alert-secondary {
  color: #6c3c04;
  background-color: #f6e3cd;
  border-color: #f2d8ba;
}

.alert-secondary hr {
  border-top-color: #eecca5;
}

.alert-secondary .alert-link {
  color: #3b2102;
}

.alert-success {
  color: #16642c;
  background-color: #d5f3dd;
  border-color: #c4eecf;
}

.alert-success hr {
  border-top-color: #b0e8bf;
}

.alert-success .alert-link {
  color: #0d3a1a;
}

.alert-info {
  color: #1f357f;
  background-color: #d8e0fd;
  border-color: #c8d4fc;
}

.alert-info hr {
  border-top-color: #b0c1fb;
}

.alert-info .alert-link {
  color: #152456;
}

.alert-warning {
  color: #828500;
  background-color: #feffcc;
  border-color: #feffb8;
}

.alert-warning hr {
  border-top-color: #feff9f;
}

.alert-warning .alert-link {
  color: #505200;
}

.alert-danger {
  color: #5c1c1c;
  background-color: #efd7d7;
  border-color: #e9c7c7;
}

.alert-danger hr {
  border-top-color: #e2b5b5;
}

.alert-danger .alert-link {
  color: #351010;
}

.alert-light {
  color: #6d6d6d;
  background-color: #f6f6f6;
  border-color: #f2f2f2;
}

.alert-light hr {
  border-top-color: #e5e5e5;
}

.alert-light .alert-link {
  color: #545454;
}

.alert-dark {
  color: #20262c;
  background-color: #d8dbdd;
  border-color: #c9cccf;
}

.alert-dark hr {
  border-top-color: #bcbfc3;
}

.alert-dark .alert-link {
  color: #0b0d0e;
}

@keyframes progress-bar-stripes {
  from {
      background-position: 1rem 0;
  }
  to {
      background-position: 0 0;
  }
}

.progress {
  display: flex;
  height: 1rem;
  overflow: hidden;
  line-height: 0;
  font-size: 0.65625rem;
  background-color: #e9ecef;
  border-radius: 0.75rem;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #43c4d3;
  transition: width 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar {
      transition: none;
  }
}

.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.progress-bar-animated {
  animation: progress-bar-stripes 1s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
      animation: none;
  }
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1;
}

.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.75rem;
}

.list-group-item-action {
  width: 100%;
  color: #495057;
  text-align: inherit;
}

.list-group-item-action:hover,
.list-group-item-action:focus {
  z-index: 1;
  color: #495057;
  text-decoration: none;
  background-color: #f8f9fa;
}

.list-group-item-action:active {
  color: #b7b7b7;
  background-color: #e9ecef;
}

.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.list-group-item:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.list-group-item:last-child {
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
}

.list-group-item.disabled,
.list-group-item:disabled {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
}

.list-group-item.active {
  z-index: 2;
  color: #fff;
  background-color: #43c4d3;
  border-color: #43c4d3;
}

.list-group-item+.list-group-item {
  border-top-width: 0;
}

.list-group-item+.list-group-item.active {
  margin-top: -1px;
  border-top-width: 1px;
}

.list-group-horizontal {
  flex-direction: row;
}

.list-group-horizontal>.list-group-item:first-child {
  border-bottom-left-radius: 0.75rem;
  border-top-right-radius: 0;
}

.list-group-horizontal>.list-group-item:last-child {
  border-top-right-radius: 0.75rem;
  border-bottom-left-radius: 0;
}

.list-group-horizontal>.list-group-item.active {
  margin-top: 0;
}

.list-group-horizontal>.list-group-item+.list-group-item {
  border-top-width: 1px;
  border-left-width: 0;
}

.list-group-horizontal>.list-group-item+.list-group-item.active {
  margin-left: -1px;
  border-left-width: 1px;
}

@media (min-width: 576px) {
  .list-group-horizontal-sm {
      flex-direction: row;
  }
  .list-group-horizontal-sm>.list-group-item:first-child {
      border-bottom-left-radius: 0.75rem;
      border-top-right-radius: 0;
  }
  .list-group-horizontal-sm>.list-group-item:last-child {
      border-top-right-radius: 0.75rem;
      border-bottom-left-radius: 0;
  }
  .list-group-horizontal-sm>.list-group-item.active {
      margin-top: 0;
  }
  .list-group-horizontal-sm>.list-group-item+.list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
  }
  .list-group-horizontal-sm>.list-group-item+.list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
  }
}

@media (min-width: 768px) {
  .list-group-horizontal-md {
      flex-direction: row;
  }
  .list-group-horizontal-md>.list-group-item:first-child {
      border-bottom-left-radius: 0.75rem;
      border-top-right-radius: 0;
  }
  .list-group-horizontal-md>.list-group-item:last-child {
      border-top-right-radius: 0.75rem;
      border-bottom-left-radius: 0;
  }
  .list-group-horizontal-md>.list-group-item.active {
      margin-top: 0;
  }
  .list-group-horizontal-md>.list-group-item+.list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
  }
  .list-group-horizontal-md>.list-group-item+.list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
  }
}

@media (min-width: 992px) {
  .list-group-horizontal-lg {
      flex-direction: row;
  }
  .list-group-horizontal-lg>.list-group-item:first-child {
      border-bottom-left-radius: 0.75rem;
      border-top-right-radius: 0;
  }
  .list-group-horizontal-lg>.list-group-item:last-child {
      border-top-right-radius: 0.75rem;
      border-bottom-left-radius: 0;
  }
  .list-group-horizontal-lg>.list-group-item.active {
      margin-top: 0;
  }
  .list-group-horizontal-lg>.list-group-item+.list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
  }
  .list-group-horizontal-lg>.list-group-item+.list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
  }
}

@media (min-width: 1200px) {
  .list-group-horizontal-xl {
      flex-direction: row;
  }
  .list-group-horizontal-xl>.list-group-item:first-child {
      border-bottom-left-radius: 0.75rem;
      border-top-right-radius: 0;
  }
  .list-group-horizontal-xl>.list-group-item:last-child {
      border-top-right-radius: 0.75rem;
      border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xl>.list-group-item.active {
      margin-top: 0;
  }
  .list-group-horizontal-xl>.list-group-item+.list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
  }
  .list-group-horizontal-xl>.list-group-item+.list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
  }
}

@media (min-width: 1440) {
  .list-group-horizontal-xxl {
      flex-direction: row;
  }
  .list-group-horizontal-xxl>.list-group-item:first-child {
      border-bottom-left-radius: 0.75rem;
      border-top-right-radius: 0;
  }
  .list-group-horizontal-xxl>.list-group-item:last-child {
      border-top-right-radius: 0.75rem;
      border-bottom-left-radius: 0;
  }
  .list-group-horizontal-xxl>.list-group-item.active {
      margin-top: 0;
  }
  .list-group-horizontal-xxl>.list-group-item+.list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
  }
  .list-group-horizontal-xxl>.list-group-item+.list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
  }
}

.list-group-flush {
  border-radius: 0;
}

.list-group-flush>.list-group-item {
  border-width: 0 0 1px;
}

.list-group-flush>.list-group-item:last-child {
  border-bottom-width: 0;
}

.list-group-item-primary {
  color: #0a5e4f;
  background-color: #bdeae2;
}

.list-group-item-primary.list-group-item-action:hover,
.list-group-item-primary.list-group-item-action:focus {
  color: #0a5e4f;
  background-color: #aae4da;
}

.list-group-item-primary.list-group-item-action.active {
  color: #fff;
  background-color: #0a5e4f;
  border-color: #0a5e4f;
}

.list-group-item-secondary {
  color: #6c3c04;
  background-color: #f2d8ba;
}

.list-group-item-secondary.list-group-item-action:hover,
.list-group-item-secondary.list-group-item-action:focus {
  color: #6c3c04;
  background-color: #eecca5;
}

.list-group-item-secondary.list-group-item-action.active {
  color: #fff;
  background-color: #6c3c04;
  border-color: #6c3c04;
}

.list-group-item-success {
  color: #16642c;
  background-color: #c4eecf;
}

.list-group-item-success.list-group-item-action:hover,
.list-group-item-success.list-group-item-action:focus {
  color: #16642c;
  background-color: #b0e8bf;
}

.list-group-item-success.list-group-item-action.active {
  color: #fff;
  background-color: #16642c;
  border-color: #16642c;
}

.list-group-item-info {
  color: #1f357f;
  background-color: #c8d4fc;
}

.list-group-item-info.list-group-item-action:hover,
.list-group-item-info.list-group-item-action:focus {
  color: #1f357f;
  background-color: #b0c1fb;
}

.list-group-item-info.list-group-item-action.active {
  color: #fff;
  background-color: #1f357f;
  border-color: #1f357f;
}

.list-group-item-warning {
  color: #828500;
  background-color: #feffb8;
}

.list-group-item-warning.list-group-item-action:hover,
.list-group-item-warning.list-group-item-action:focus {
  color: #828500;
  background-color: #feff9f;
}

.list-group-item-warning.list-group-item-action.active {
  color: #fff;
  background-color: #828500;
  border-color: #828500;
}

.list-group-item-danger {
  color: #5c1c1c;
  background-color: #e9c7c7;
}

.list-group-item-danger.list-group-item-action:hover,
.list-group-item-danger.list-group-item-action:focus {
  color: #5c1c1c;
  background-color: #e2b5b5;
}

.list-group-item-danger.list-group-item-action.active {
  color: #fff;
  background-color: #5c1c1c;
  border-color: #5c1c1c;
}

.list-group-item-light {
  color: #6d6d6d;
  background-color: #f2f2f2;
}

.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
  color: #6d6d6d;
  background-color: #e5e5e5;
}

.list-group-item-light.list-group-item-action.active {
  color: #fff;
  background-color: #6d6d6d;
  border-color: #6d6d6d;
}

.list-group-item-dark {
  color: #20262c;
  background-color: #c9cccf;
}

.list-group-item-dark.list-group-item-action:hover,
.list-group-item-dark.list-group-item-action:focus {
  color: #20262c;
  background-color: #bcbfc3;
}

.list-group-item-dark.list-group-item-action.active {
  color: #fff;
  background-color: #20262c;
  border-color: #20262c;
}

.close {
  float: right;
  font-size: 1.3125rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: .5;
}

.close:hover {
  color: #000;
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):hover,
.close:not(:disabled):not(.disabled):focus {
  opacity: .75;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}

a.close.disabled {
  pointer-events: none;
}

.toast {
  flex-basis: 350px;
  max-width: 350px;
  font-size: 0.875rem;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  opacity: 0;
  border-radius: 0.25rem;
}

.toast:not(:last-child) {
  margin-bottom: 0.75rem;
}

.toast.showing {
  opacity: 1;
}

.toast.show {
  display: block;
  opacity: 1;
}

.toast.hide {
  display: none;
}

.toast-header {
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  color: #6c757d;
  background-color: rgba(255, 255, 255, 0.85);
  background-clip: padding-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.toast-body {
  padding: 0.75rem;
}

.modal-open {
  overflow: hidden;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}

.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}

@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
      transition: none;
  }
}

.modal.show .modal-dialog {
  transform: none;
}

.modal.modal-static .modal-dialog {
  transform: scale(1.02);
}

.modal-dialog-scrollable {
  display: flex;
  max-height: calc(100% - 1rem);
}

.modal-dialog-scrollable .modal-content {
  max-height: calc(100vh - 1rem);
  overflow: hidden;
}

.modal-dialog-scrollable .modal-header,
.modal-dialog-scrollable .modal-footer {
  flex-shrink: 0;
}

.modal-dialog-scrollable .modal-body {
  overflow-y: auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 1rem);
}

.modal-dialog-centered::before {
  display: block;
  height: calc(100vh - 1rem);
  height: min-content;
  content: "";
}

.modal-dialog-centered.modal-dialog-scrollable {
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  max-height: none;
}

.modal-dialog-centered.modal-dialog-scrollable::before {
  content: none;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop.show {
  opacity: 0.8;
}

.modal-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #EEEEEE;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.modal-header .close {
  padding: 1rem 1rem;
  margin: -1rem -1rem -1rem auto;
}

.modal-title {
  margin-bottom: 0;
  line-height: 1.5;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0 0;
  border-top: 1px solid #EEEEEE;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}

.modal-footer>* {
  margin: 0.25rem;
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll;
}

@media (min-width: 576px) {
  .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
  }
  .modal-dialog-scrollable {
      max-height: calc(100% - 3.5rem);
  }
  .modal-dialog-scrollable .modal-content {
      max-height: calc(100vh - 3.5rem);
  }
  .modal-dialog-centered {
      min-height: calc(100% - 3.5rem);
  }
  .modal-dialog-centered::before {
      height: calc(100vh - 3.5rem);
      height: min-content;
  }
  .modal-sm {
      max-width: 300px;
  }
}

@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
      max-width: 800px;
  }
}

@media (min-width: 1200px) {
  .modal-xl {
      max-width: 1140px;
  }
}

.tooltip {
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.765625rem;
  word-wrap: break-word;
  opacity: 0;
}

.tooltip.show {
  opacity: 0.9;
}

.tooltip .arrow {
  position: absolute;
  display: block;
  width: 0.8rem;
  height: 0.4rem;
}

.tooltip .arrow::before {
  position: absolute;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-tooltip-top,
.bs-tooltip-auto[x-placement^="top"] {
  padding: 0.4rem 0;
}

.bs-tooltip-top .arrow,
.bs-tooltip-auto[x-placement^="top"] .arrow {
  bottom: 0;
}

.bs-tooltip-top .arrow::before,
.bs-tooltip-auto[x-placement^="top"] .arrow::before {
  top: 0;
  border-width: 0.4rem 0.4rem 0;
  border-top-color: #000;
}

.bs-tooltip-right,
.bs-tooltip-auto[x-placement^="right"] {
  padding: 0 0.4rem;
}

.bs-tooltip-right .arrow,
.bs-tooltip-auto[x-placement^="right"] .arrow {
  left: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-right .arrow::before,
.bs-tooltip-auto[x-placement^="right"] .arrow::before {
  right: 0;
  border-width: 0.4rem 0.4rem 0.4rem 0;
  border-right-color: #000;
}

.bs-tooltip-bottom,
.bs-tooltip-auto[x-placement^="bottom"] {
  padding: 0.4rem 0;
}

.bs-tooltip-bottom .arrow,
.bs-tooltip-auto[x-placement^="bottom"] .arrow {
  top: 0;
}

.bs-tooltip-bottom .arrow::before,
.bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
  bottom: 0;
  border-width: 0 0.4rem 0.4rem;
  border-bottom-color: #000;
}

.bs-tooltip-left,
.bs-tooltip-auto[x-placement^="left"] {
  padding: 0 0.4rem;
}

.bs-tooltip-left .arrow,
.bs-tooltip-auto[x-placement^="left"] .arrow {
  right: 0;
  width: 0.4rem;
  height: 0.8rem;
}

.bs-tooltip-left .arrow::before,
.bs-tooltip-auto[x-placement^="left"] .arrow::before {
  left: 0;
  border-width: 0.4rem 0 0.4rem 0.4rem;
  border-left-color: #000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 0.25rem 0.5rem;
  color: #fff;
  text-align: center;
  background-color: #000;
  border-radius: 0.75rem;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: block;
  max-width: 276px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.765625rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}

.popover .arrow {
  position: absolute;
  display: block;
  width: 1rem;
  height: 0.5rem;
  margin: 0 0.3rem;
}

.popover .arrow::before,
.popover .arrow::after {
  position: absolute;
  display: block;
  content: "";
  border-color: transparent;
  border-style: solid;
}

.bs-popover-top,
.bs-popover-auto[x-placement^="top"] {
  margin-bottom: 0.5rem;
}

.bs-popover-top>.arrow,
.bs-popover-auto[x-placement^="top"]>.arrow {
  bottom: calc(-0.5rem - 1px);
}

.bs-popover-top>.arrow::before,
.bs-popover-auto[x-placement^="top"]>.arrow::before {
  bottom: 0;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-top>.arrow::after,
.bs-popover-auto[x-placement^="top"]>.arrow::after {
  bottom: 1px;
  border-width: 0.5rem 0.5rem 0;
  border-top-color: #fff;
}

.bs-popover-right,
.bs-popover-auto[x-placement^="right"] {
  margin-left: 0.5rem;
}

.bs-popover-right>.arrow,
.bs-popover-auto[x-placement^="right"]>.arrow {
  left: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-right>.arrow::before,
.bs-popover-auto[x-placement^="right"]>.arrow::before {
  left: 0;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-right>.arrow::after,
.bs-popover-auto[x-placement^="right"]>.arrow::after {
  left: 1px;
  border-width: 0.5rem 0.5rem 0.5rem 0;
  border-right-color: #fff;
}

.bs-popover-bottom,
.bs-popover-auto[x-placement^="bottom"] {
  margin-top: 0.5rem;
}

.bs-popover-bottom>.arrow,
.bs-popover-auto[x-placement^="bottom"]>.arrow {
  top: calc(-0.5rem - 1px);
}

.bs-popover-bottom>.arrow::before,
.bs-popover-auto[x-placement^="bottom"]>.arrow::before {
  top: 0;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-bottom>.arrow::after,
.bs-popover-auto[x-placement^="bottom"]>.arrow::after {
  top: 1px;
  border-width: 0 0.5rem 0.5rem 0.5rem;
  border-bottom-color: #fff;
}

.bs-popover-bottom .popover-header::before,
.bs-popover-auto[x-placement^="bottom"] .popover-header::before {
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 1rem;
  margin-left: -0.5rem;
  content: "";
  border-bottom: 1px solid #f7f7f7;
}

.bs-popover-left,
.bs-popover-auto[x-placement^="left"] {
  margin-right: 0.5rem;
}

.bs-popover-left>.arrow,
.bs-popover-auto[x-placement^="left"]>.arrow {
  right: calc(-0.5rem - 1px);
  width: 0.5rem;
  height: 1rem;
  margin: 0.3rem 0;
}

.bs-popover-left>.arrow::before,
.bs-popover-auto[x-placement^="left"]>.arrow::before {
  right: 0;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: rgba(0, 0, 0, 0.25);
}

.bs-popover-left>.arrow::after,
.bs-popover-auto[x-placement^="left"]>.arrow::after {
  right: 1px;
  border-width: 0.5rem 0 0.5rem 0.5rem;
  border-left-color: #fff;
}

.popover-header {
  padding: 0.5rem 0.75rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #3d4465;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}

.popover-header:empty {
  display: none;
}

.popover-body {
  padding: 0.5rem 0.75rem;
  color: #b7b7b7;
}

.carousel {
  position: relative;
}

.carousel.pointer-event {
  touch-action: pan-y;
}

.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  display: none;
  float: left;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-item {
      transition: none;
  }
}

.carousel-item.active,
.carousel-item-next,
.carousel-item-prev {
  display: block;
}

.carousel-item-next:not(.carousel-item-left),
.active.carousel-item-right {
  transform: translateX(100%);
}

.carousel-item-prev:not(.carousel-item-right),
.active.carousel-item-left {
  transform: translateX(-100%);
}

.carousel-fade .carousel-item {
  opacity: 0;
  transition-property: opacity;
  transform: none;
}

.carousel-fade .carousel-item.active,
.carousel-fade .carousel-item-next.carousel-item-left,
.carousel-fade .carousel-item-prev.carousel-item-right {
  z-index: 1;
  opacity: 1;
}

.carousel-fade .active.carousel-item-left,
.carousel-fade .active.carousel-item-right {
  z-index: 0;
  opacity: 0;
  transition: opacity 0s 0.6s;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-fade .active.carousel-item-left,
  .carousel-fade .active.carousel-item-right {
      transition: none;
  }
}

.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-control-prev,
  .carousel-control-next {
      transition: none;
  }
}

.carousel-control-prev:hover,
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
  color: #fff;
  text-decoration: none;
  outline: 0;
  opacity: 0.9;
}

.carousel-control-prev {
  left: 0;
}

.carousel-control-next {
  right: 0;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: no-repeat 50% / 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e");
}

.carousel-indicators {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  padding-left: 0;
  margin-right: 15%;
  margin-left: 15%;
  list-style: none;
}

.carousel-indicators li {
  box-sizing: content-box;
  flex: 0 1 auto;
  width: 30px;
  height: 3px;
  margin-right: 3px;
  margin-left: 3px;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fff;
  background-clip: padding-box;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  opacity: .5;
  transition: opacity 0.6s ease;
}

@media (prefers-reduced-motion: reduce) {
  .carousel-indicators li {
      transition: none;
  }
}

.carousel-indicators .active {
  opacity: 1;
}

.carousel-caption {
  position: absolute;
  right: 15%;
  bottom: 20px;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}

@keyframes spinner-border {
  to {
      transform: rotate(360deg);
  }
}

.spinner-border {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border .75s linear infinite;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

@keyframes spinner-grow {
  0% {
      transform: scale(0);
  }
  50% {
      opacity: 1;
      transform: none;
  }
}

.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  background-color: currentColor;
  border-radius: 50%;
  opacity: 0;
  animation: spinner-grow .75s linear infinite;
}

.spinner-grow-sm {
  width: 1rem;
  height: 1rem;
}

.align-baseline {
  vertical-align: baseline !important;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.align-text-bottom {
  vertical-align: text-bottom !important;
}

.align-text-top {
  vertical-align: text-top !important;
}

.bg-primary {
  background-color: #43c4d3 !important;
}

a.bg-primary:hover,
a.bg-primary:focus,
button.bg-primary:hover,
button.bg-primary:focus {
  background-color: #0e8670 !important;
}

.bg-secondary {
  background-color: #D07407 !important;
}

a.bg-secondary:hover,
a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #9f5805 !important;
}

.bg-success {
  background-color: #2bc155 !important;
}

a.bg-success:hover,
a.bg-success:focus,
button.bg-success:hover,
button.bg-success:focus {
  background-color: #229743 !important;
}

.bg-info {
  background-color: #3C65F5 !important;
}

a.bg-info:hover,
a.bg-info:focus,
button.bg-info:hover,
button.bg-info:focus {
  background-color: #0c3ff2 !important;
}

.bg-warning {
  background-color: #FAFF00 !important;
}

a.bg-warning:hover,
a.bg-warning:focus,
button.bg-warning:hover,
button.bg-warning:focus {
  background-color: #c8cc00 !important;
}

.bg-danger {
  background-color: #B03636 !important;
}

a.bg-danger:hover,
a.bg-danger:focus,
button.bg-danger:hover,
button.bg-danger:focus {
  background-color: #892a2a !important;
}

.bg-light {
  background-color: #D1D1D1 !important;
}

a.bg-light:hover,
a.bg-light:focus,
button.bg-light:hover,
button.bg-light:focus {
  background-color: #b8b8b8 !important;
}

.bg-dark {
  background-color: #00000030 !important;
  border-radius: 5px;
}

.bg-dark2 {
  background-color: #090d12 !important;
}

a.bg-dark:hover,
a.bg-dark:focus,
button.bg-dark:hover,
button.bg-dark:focus {
  background-color: #283037 !important;
}

.bg-white {
  background-color: #fff !important;
}

.bg-transparent {
  background-color: transparent !important;
}

.border {
  border: 1px solid #EEEEEE !important;
}

.border-top {
  border-top: 1px solid #EEEEEE !important;
}

.border-right {
  border-right: 1px solid #EEEEEE !important;
}

.border-bottom {
  border-bottom: 1px solid #EEEEEE !important;
}

.border-left {
  border-left: 1px solid #EEEEEE !important;
}

.border-0 {
  border: 0 !important;
}

.border-top-0 {
  border-top: 0 !important;
}

.border-right-0 {
  border-right: 0 !important;
}

.border-bottom-0 {
  border-bottom: 0 !important;
}

.border-left-0 {
  border-left: 0 !important;
}

.border-primary {
  border-color: #43c4d3 !important;
}

.border-secondary {
  border-color: #D07407 !important;
}

.border-success {
  border-color: #2bc155 !important;
}

.border-info {
  border-color: #3C65F5 !important;
}

.border-warning {
  border-color: #FAFF00 !important;
}

.border-danger {
  border-color: #B03636 !important;
}

.border-light {
  border-color: #D1D1D1 !important;
}

.border-dark {
  border-color: #3e4954 !important;
}

.border-white {
  border-color: #fff !important;
}

.rounded-sm {
  border-radius: 0.2rem !important;
}

.rounded {
  border-radius: 0.75rem !important;
}

.rounded-top {
  border-top-left-radius: 0.75rem !important;
  border-top-right-radius: 0.75rem !important;
}

.rounded-right {
  border-top-right-radius: 0.75rem !important;
  border-bottom-right-radius: 0.75rem !important;
}

.rounded-bottom {
  border-bottom-right-radius: 0.75rem !important;
  border-bottom-left-radius: 0.75rem !important;
}

.rounded-left {
  border-top-left-radius: 0.75rem !important;
  border-bottom-left-radius: 0.75rem !important;
}

.rounded-lg {
  border-radius: 0.3rem !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.rounded-pill {
  border-radius: 50rem !important;
}

.rounded-0 {
  border-radius: 0 !important;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.d-none {
  display: none !important;
}

.d-inline {
  display: inline !important;
}

.d-inline-block {
  display: inline-block !important;
}

.d-block {
  display: block !important;
}

.d-table {
  display: table !important;
}

.d-table-row {
  display: table-row !important;
}

.d-table-cell {
  display: table-cell !important;
}

.d-flex {
  display: flex !important;
}

.d-inline-flex {
  display: inline-flex !important;
}

@media (min-width: 576px) {
  .d-sm-none {
      display: none !important;
  }
  .d-sm-inline {
      display: inline !important;
  }
  .d-sm-inline-block {
      display: inline-block !important;
  }
  .d-sm-block {
      display: block !important;
  }
  .d-sm-table {
      display: table !important;
  }
  .d-sm-table-row {
      display: table-row !important;
  }
  .d-sm-table-cell {
      display: table-cell !important;
  }
  .d-sm-flex {
      display: flex !important;
  }
  .d-sm-inline-flex {
      display: inline-flex !important;
  }
}

@media (min-width: 768px) {
  .d-md-none {
      display: none !important;
  }
  .d-md-inline {
      display: inline !important;
  }
  .d-md-inline-block {
      display: inline-block !important;
  }
  .d-md-block {
      display: block !important;
  }
  .d-md-table {
      display: table !important;
  }
  .d-md-table-row {
      display: table-row !important;
  }
  .d-md-table-cell {
      display: table-cell !important;
  }
  .d-md-flex {
      display: flex !important;
  }
  .d-md-inline-flex {
      display: inline-flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
      display: none !important;
  }
  .d-lg-inline {
      display: inline !important;
  }
  .d-lg-inline-block {
      display: inline-block !important;
  }
  .d-lg-block {
      display: block !important;
  }
  .d-lg-table {
      display: table !important;
  }
  .d-lg-table-row {
      display: table-row !important;
  }
  .d-lg-table-cell {
      display: table-cell !important;
  }
  .d-lg-flex {
      display: flex !important;
  }
  .d-lg-inline-flex {
      display: inline-flex !important;
  }
}

@media (min-width: 1200px) {
  .d-xl-none {
      display: none !important;
  }
  .d-xl-inline {
      display: inline !important;
  }
  .d-xl-inline-block {
      display: inline-block !important;
  }
  .d-xl-block {
      display: block !important;
  }
  .d-xl-table {
      display: table !important;
  }
  .d-xl-table-row {
      display: table-row !important;
  }
  .d-xl-table-cell {
      display: table-cell !important;
  }
  .d-xl-flex {
      display: flex !important;
  }
  .d-xl-inline-flex {
      display: inline-flex !important;
  }
}

@media (min-width: 1440) {
  .d-xxl-none {
      display: none !important;
  }
  .d-xxl-inline {
      display: inline !important;
  }
  .d-xxl-inline-block {
      display: inline-block !important;
  }
  .d-xxl-block {
      display: block !important;
  }
  .d-xxl-table {
      display: table !important;
  }
  .d-xxl-table-row {
      display: table-row !important;
  }
  .d-xxl-table-cell {
      display: table-cell !important;
  }
  .d-xxl-flex {
      display: flex !important;
  }
  .d-xxl-inline-flex {
      display: inline-flex !important;
  }
}

@media print {
  .d-print-none {
      display: none !important;
  }
  .d-print-inline {
      display: inline !important;
  }
  .d-print-inline-block {
      display: inline-block !important;
  }
  .d-print-block {
      display: block !important;
  }
  .d-print-table {
      display: table !important;
  }
  .d-print-table-row {
      display: table-row !important;
  }
  .d-print-table-cell {
      display: table-cell !important;
  }
  .d-print-flex {
      display: flex !important;
  }
  .d-print-inline-flex {
      display: inline-flex !important;
  }
}

.embed-responsive {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.embed-responsive::before {
  display: block;
  content: "";
}

.embed-responsive .embed-responsive-item,
.embed-responsive iframe,
.embed-responsive embed,
.embed-responsive object,
.embed-responsive video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.embed-responsive-21by9::before {
  padding-top: 42.8571428571%;
}

.embed-responsive-16by9::before {
  padding-top: 56.25%;
}

.embed-responsive-4by3::before {
  padding-top: 75%;
}

.embed-responsive-1by1::before {
  padding-top: 100%;
}

.flex-row {
  flex-direction: row !important;
}

.flex-column {
  flex-direction: column !important;
}

.flex-row-reverse {
  flex-direction: row-reverse !important;
}

.flex-column-reverse {
  flex-direction: column-reverse !important;
}

.flex-wrap {
  flex-wrap: wrap !important;
}

.flex-nowrap {
  flex-wrap: nowrap !important;
}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;
}

.flex-fill {
  flex: 1 1 auto !important;
}

.flex-grow-0 {
  flex-grow: 0 !important;
}

.flex-grow-1 {
  flex-grow: 1 !important;
}

.flex-shrink-0 {
  flex-shrink: 0 !important;
}

.flex-shrink-1 {
  flex-shrink: 1 !important;
}

.justify-content-start {
  justify-content: flex-start !important;
}

.justify-content-end {
  justify-content: flex-end !important;
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-start {
  align-items: flex-start !important;
}

.align-items-end {
  align-items: flex-end !important;
}

.align-items-center {
  align-items: center !important;
}

.align-items-baseline {
  align-items: baseline !important;
}

.align-items-stretch {
  align-items: stretch !important;
}

.align-content-start {
  align-content: flex-start !important;
}

.align-content-end {
  align-content: flex-end !important;
}

.align-content-center {
  align-content: center !important;
}

.align-content-between {
  align-content: space-between !important;
}

.align-content-around {
  align-content: space-around !important;
}

.align-content-stretch {
  align-content: stretch !important;
}

.align-self-auto {
  align-self: auto !important;
}

.align-self-start {
  align-self: flex-start !important;
}

.align-self-end {
  align-self: flex-end !important;
}

.align-self-center {
  align-self: center !important;
}

.align-self-baseline {
  align-self: baseline !important;
}

.align-self-stretch {
  align-self: stretch !important;
}

@media (min-width: 576px) {
  .flex-sm-row {
      flex-direction: row !important;
  }
  .flex-sm-column {
      flex-direction: column !important;
  }
  .flex-sm-row-reverse {
      flex-direction: row-reverse !important;
  }
  .flex-sm-column-reverse {
      flex-direction: column-reverse !important;
  }
  .flex-sm-wrap {
      flex-wrap: wrap !important;
  }
  .flex-sm-nowrap {
      flex-wrap: nowrap !important;
  }
  .flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
  }
  .flex-sm-fill {
      flex: 1 1 auto !important;
  }
  .flex-sm-grow-0 {
      flex-grow: 0 !important;
  }
  .flex-sm-grow-1 {
      flex-grow: 1 !important;
  }
  .flex-sm-shrink-0 {
      flex-shrink: 0 !important;
  }
  .flex-sm-shrink-1 {
      flex-shrink: 1 !important;
  }
  .justify-content-sm-start {
      justify-content: flex-start !important;
  }
  .justify-content-sm-end {
      justify-content: flex-end !important;
  }
  .justify-content-sm-center {
      justify-content: center !important;
  }
  .justify-content-sm-between {
      justify-content: space-between !important;
  }
  .justify-content-sm-around {
      justify-content: space-around !important;
  }
  .align-items-sm-start {
      align-items: flex-start !important;
  }
  .align-items-sm-end {
      align-items: flex-end !important;
  }
  .align-items-sm-center {
      align-items: center !important;
  }
  .align-items-sm-baseline {
      align-items: baseline !important;
  }
  .align-items-sm-stretch {
      align-items: stretch !important;
  }
  .align-content-sm-start {
      align-content: flex-start !important;
  }
  .align-content-sm-end {
      align-content: flex-end !important;
  }
  .align-content-sm-center {
      align-content: center !important;
  }
  .align-content-sm-between {
      align-content: space-between !important;
  }
  .align-content-sm-around {
      align-content: space-around !important;
  }
  .align-content-sm-stretch {
      align-content: stretch !important;
  }
  .align-self-sm-auto {
      align-self: auto !important;
  }
  .align-self-sm-start {
      align-self: flex-start !important;
  }
  .align-self-sm-end {
      align-self: flex-end !important;
  }
  .align-self-sm-center {
      align-self: center !important;
  }
  .align-self-sm-baseline {
      align-self: baseline !important;
  }
  .align-self-sm-stretch {
      align-self: stretch !important;
  }
}

@media (min-width: 768px) {
  .flex-md-row {
      flex-direction: row !important;
  }
  .flex-md-column {
      flex-direction: column !important;
  }
  .flex-md-row-reverse {
      flex-direction: row-reverse !important;
  }
  .flex-md-column-reverse {
      flex-direction: column-reverse !important;
  }
  .flex-md-wrap {
      flex-wrap: wrap !important;
  }
  .flex-md-nowrap {
      flex-wrap: nowrap !important;
  }
  .flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
  }
  .flex-md-fill {
      flex: 1 1 auto !important;
  }
  .flex-md-grow-0 {
      flex-grow: 0 !important;
  }
  .flex-md-grow-1 {
      flex-grow: 1 !important;
  }
  .flex-md-shrink-0 {
      flex-shrink: 0 !important;
  }
  .flex-md-shrink-1 {
      flex-shrink: 1 !important;
  }
  .justify-content-md-start {
      justify-content: flex-start !important;
  }
  .justify-content-md-end {
      justify-content: flex-end !important;
  }
  .justify-content-md-center {
      justify-content: center !important;
  }
  .justify-content-md-between {
      justify-content: space-between !important;
  }
  .justify-content-md-around {
      justify-content: space-around !important;
  }
  .align-items-md-start {
      align-items: flex-start !important;
  }
  .align-items-md-end {
      align-items: flex-end !important;
  }
  .align-items-md-center {
      align-items: center !important;
  }
  .align-items-md-baseline {
      align-items: baseline !important;
  }
  .align-items-md-stretch {
      align-items: stretch !important;
  }
  .align-content-md-start {
      align-content: flex-start !important;
  }
  .align-content-md-end {
      align-content: flex-end !important;
  }
  .align-content-md-center {
      align-content: center !important;
  }
  .align-content-md-between {
      align-content: space-between !important;
  }
  .align-content-md-around {
      align-content: space-around !important;
  }
  .align-content-md-stretch {
      align-content: stretch !important;
  }
  .align-self-md-auto {
      align-self: auto !important;
  }
  .align-self-md-start {
      align-self: flex-start !important;
  }
  .align-self-md-end {
      align-self: flex-end !important;
  }
  .align-self-md-center {
      align-self: center !important;
  }
  .align-self-md-baseline {
      align-self: baseline !important;
  }
  .align-self-md-stretch {
      align-self: stretch !important;
  }
}

@media (min-width: 992px) {
  .flex-lg-row {
      flex-direction: row !important;
  }
  .flex-lg-column {
      flex-direction: column !important;
  }
  .flex-lg-row-reverse {
      flex-direction: row-reverse !important;
  }
  .flex-lg-column-reverse {
      flex-direction: column-reverse !important;
  }
  .flex-lg-wrap {
      flex-wrap: wrap !important;
  }
  .flex-lg-nowrap {
      flex-wrap: nowrap !important;
  }
  .flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
  }
  .flex-lg-fill {
      flex: 1 1 auto !important;
  }
  .flex-lg-grow-0 {
      flex-grow: 0 !important;
  }
  .flex-lg-grow-1 {
      flex-grow: 1 !important;
  }
  .flex-lg-shrink-0 {
      flex-shrink: 0 !important;
  }
  .flex-lg-shrink-1 {
      flex-shrink: 1 !important;
  }
  .justify-content-lg-start {
      justify-content: flex-start !important;
  }
  .justify-content-lg-end {
      justify-content: flex-end !important;
  }
  .justify-content-lg-center {
      justify-content: center !important;
  }
  .justify-content-lg-between {
      justify-content: space-between !important;
  }
  .justify-content-lg-around {
      justify-content: space-around !important;
  }
  .align-items-lg-start {
      align-items: flex-start !important;
  }
  .align-items-lg-end {
      align-items: flex-end !important;
  }
  .align-items-lg-center {
      align-items: center !important;
  }
  .align-items-lg-baseline {
      align-items: baseline !important;
  }
  .align-items-lg-stretch {
      align-items: stretch !important;
  }
  .align-content-lg-start {
      align-content: flex-start !important;
  }
  .align-content-lg-end {
      align-content: flex-end !important;
  }
  .align-content-lg-center {
      align-content: center !important;
  }
  .align-content-lg-between {
      align-content: space-between !important;
  }
  .align-content-lg-around {
      align-content: space-around !important;
  }
  .align-content-lg-stretch {
      align-content: stretch !important;
  }
  .align-self-lg-auto {
      align-self: auto !important;
  }
  .align-self-lg-start {
      align-self: flex-start !important;
  }
  .align-self-lg-end {
      align-self: flex-end !important;
  }
  .align-self-lg-center {
      align-self: center !important;
  }
  .align-self-lg-baseline {
      align-self: baseline !important;
  }
  .align-self-lg-stretch {
      align-self: stretch !important;
  }
}

@media (min-width: 1200px) {
  .flex-xl-row {
      flex-direction: row !important;
  }
  .flex-xl-column {
      flex-direction: column !important;
  }
  .flex-xl-row-reverse {
      flex-direction: row-reverse !important;
  }
  .flex-xl-column-reverse {
      flex-direction: column-reverse !important;
  }
  .flex-xl-wrap {
      flex-wrap: wrap !important;
  }
  .flex-xl-nowrap {
      flex-wrap: nowrap !important;
  }
  .flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
  }
  .flex-xl-fill {
      flex: 1 1 auto !important;
  }
  .flex-xl-grow-0 {
      flex-grow: 0 !important;
  }
  .flex-xl-grow-1 {
      flex-grow: 1 !important;
  }
  .flex-xl-shrink-0 {
      flex-shrink: 0 !important;
  }
  .flex-xl-shrink-1 {
      flex-shrink: 1 !important;
  }
  .justify-content-xl-start {
      justify-content: flex-start !important;
  }
  .justify-content-xl-end {
      justify-content: flex-end !important;
  }
  .justify-content-xl-center {
      justify-content: center !important;
  }
  .justify-content-xl-between {
      justify-content: space-between !important;
  }
  .justify-content-xl-around {
      justify-content: space-around !important;
  }
  .align-items-xl-start {
      align-items: flex-start !important;
  }
  .align-items-xl-end {
      align-items: flex-end !important;
  }
  .align-items-xl-center {
      align-items: center !important;
  }
  .align-items-xl-baseline {
      align-items: baseline !important;
  }
  .align-items-xl-stretch {
      align-items: stretch !important;
  }
  .align-content-xl-start {
      align-content: flex-start !important;
  }
  .align-content-xl-end {
      align-content: flex-end !important;
  }
  .align-content-xl-center {
      align-content: center !important;
  }
  .align-content-xl-between {
      align-content: space-between !important;
  }
  .align-content-xl-around {
      align-content: space-around !important;
  }
  .align-content-xl-stretch {
      align-content: stretch !important;
  }
  .align-self-xl-auto {
      align-self: auto !important;
  }
  .align-self-xl-start {
      align-self: flex-start !important;
  }
  .align-self-xl-end {
      align-self: flex-end !important;
  }
  .align-self-xl-center {
      align-self: center !important;
  }
  .align-self-xl-baseline {
      align-self: baseline !important;
  }
  .align-self-xl-stretch {
      align-self: stretch !important;
  }
}

@media (min-width: 1440) {
  .flex-xxl-row {
      flex-direction: row !important;
  }
  .flex-xxl-column {
      flex-direction: column !important;
  }
  .flex-xxl-row-reverse {
      flex-direction: row-reverse !important;
  }
  .flex-xxl-column-reverse {
      flex-direction: column-reverse !important;
  }
  .flex-xxl-wrap {
      flex-wrap: wrap !important;
  }
  .flex-xxl-nowrap {
      flex-wrap: nowrap !important;
  }
  .flex-xxl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
  }
  .flex-xxl-fill {
      flex: 1 1 auto !important;
  }
  .flex-xxl-grow-0 {
      flex-grow: 0 !important;
  }
  .flex-xxl-grow-1 {
      flex-grow: 1 !important;
  }
  .flex-xxl-shrink-0 {
      flex-shrink: 0 !important;
  }
  .flex-xxl-shrink-1 {
      flex-shrink: 1 !important;
  }
  .justify-content-xxl-start {
      justify-content: flex-start !important;
  }
  .justify-content-xxl-end {
      justify-content: flex-end !important;
  }
  .justify-content-xxl-center {
      justify-content: center !important;
  }
  .justify-content-xxl-between {
      justify-content: space-between !important;
  }
  .justify-content-xxl-around {
      justify-content: space-around !important;
  }
  .align-items-xxl-start {
      align-items: flex-start !important;
  }
  .align-items-xxl-end {
      align-items: flex-end !important;
  }
  .align-items-xxl-center {
      align-items: center !important;
  }
  .align-items-xxl-baseline {
      align-items: baseline !important;
  }
  .align-items-xxl-stretch {
      align-items: stretch !important;
  }
  .align-content-xxl-start {
      align-content: flex-start !important;
  }
  .align-content-xxl-end {
      align-content: flex-end !important;
  }
  .align-content-xxl-center {
      align-content: center !important;
  }
  .align-content-xxl-between {
      align-content: space-between !important;
  }
  .align-content-xxl-around {
      align-content: space-around !important;
  }
  .align-content-xxl-stretch {
      align-content: stretch !important;
  }
  .align-self-xxl-auto {
      align-self: auto !important;
  }
  .align-self-xxl-start {
      align-self: flex-start !important;
  }
  .align-self-xxl-end {
      align-self: flex-end !important;
  }
  .align-self-xxl-center {
      align-self: center !important;
  }
  .align-self-xxl-baseline {
      align-self: baseline !important;
  }
  .align-self-xxl-stretch {
      align-self: stretch !important;
  }
}

.float-left {
  float: left !important;
}

.float-right {
  float: right !important;
}

.float-none {
  float: none !important;
}

@media (min-width: 576px) {
  .float-sm-left {
      float: left !important;
  }
  .float-sm-right {
      float: right !important;
  }
  .float-sm-none {
      float: none !important;
  }
}

@media (min-width: 768px) {
  .float-md-left {
      float: left !important;
  }
  .float-md-right {
      float: right !important;
  }
  .float-md-none {
      float: none !important;
  }
}

@media (min-width: 992px) {
  .float-lg-left {
      float: left !important;
  }
  .float-lg-right {
      float: right !important;
  }
  .float-lg-none {
      float: none !important;
  }
}

@media (min-width: 1200px) {
  .float-xl-left {
      float: left !important;
  }
  .float-xl-right {
      float: right !important;
  }
  .float-xl-none {
      float: none !important;
  }
}

@media (min-width: 1440) {
  .float-xxl-left {
      float: left !important;
  }
  .float-xxl-right {
      float: right !important;
  }
  .float-xxl-none {
      float: none !important;
  }
}

.user-select-all {
  user-select: all !important;
}

.user-select-auto {
  user-select: auto !important;
}

.user-select-none {
  user-select: none !important;
}

.overflow-auto {
  overflow: auto !important;
}

.overflow-hidden {
  overflow: hidden !important;
}

.position-static {
  position: static !important;
}

.position-relative {
  position: relative !important;
}

.position-absolute {
  position: absolute !important;
}

.position-fixed {
  position: fixed !important;
}

.position-sticky {
  position: sticky !important;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-bottom {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1030;
}

@supports (position: sticky) {
  .sticky-top {
      position: sticky;
      top: 0;
      z-index: 1020;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.sr-only-focusable:active,
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

.w-25 {
  width: 25% !important;
}

.w-50 {
  width: 50% !important;
}

.w-75 {
  width: 75% !important;
}

.w-100 {
  width: 100% !important;
}

.w-auto {
  width: auto !important;
}

.h-25 {
  height: 25% !important;
}

.h-50 {
  height: 50% !important;
}

.h-75 {
  height: 75% !important;
}

.h-100 {
  height: 100% !important;
}

.h-auto {
  height: auto !important;
}

.mw-100 {
  max-width: 100% !important;
}

.mh-100 {
  max-height: 100% !important;
}

.min-vw-100 {
  min-width: 100vw !important;
}

.min-vh-100 {
  min-height: 100vh !important;
}

.vw-100 {
  width: 100vw !important;
}

.vh-100 {
  height: 100vh !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0,
.my-0 {
  margin-top: 0 !important;
}

.mr-0,
.mx-0 {
  margin-right: 0 !important;
}

.mb-0,
.my-0 {
  margin-bottom: 0 !important;
}

.ml-0,
.mx-0 {
  margin-left: 0 !important;
}

.m-1 {
  margin: 0.25rem !important;
}

.mt-1,
.my-1 {
  margin-top: 0.25rem !important;
}

.mr-1,
.mx-1 {
  margin-right: 0.25rem !important;
}

.mb-1,
.my-1 {
  margin-bottom: 0.25rem !important;
}

.ml-1,
.mx-1 {
  margin-left: 0.25rem !important;
}

.m-2 {
  margin: 0.5rem !important;
}

.mt-2,
.my-2 {
  margin-top: 0.5rem !important;
}

.mr-2,
.mx-2 {
  margin-right: 0.5rem !important;
}

.mb-2,
.my-2 {
  margin-bottom: 0.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.m-3 {
  margin: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.m-5 {
  margin: 2rem !important;
}

.mt-3,
.my-3 {
  margin-top: 1rem !important;
}

.mr-3,
.mx-3 {
  margin-right: 1rem !important;
}

.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.ml-3,
.mx-3 {
  margin-left: 1rem !important;
}

.m-4 {
  margin: 1.5rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4,
.mx-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.ml-4,
.mx-4 {
  margin-left: 1.5rem !important;
}

.m-5 {
  margin: 3rem !important;
}

.mt-5,
.my-5 {
  margin-top: 3rem !important;
}

.mr-5,
.mx-5 {
  margin-right: 3rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.ml-5,
.mx-5 {
  margin-left: 3rem !important;
}

.p-0 {
  padding: 0 !important;
}

.pt-0,
.py-0 {
  padding-top: 0 !important;
}

.pr-0,
.px-0 {
  padding-right: 0 !important;
}

.pb-0,
.py-0 {
  padding-bottom: 0 !important;
}

.pl-0,
.px-0 {
  padding-left: 0 !important;
}

.p-1 {
  padding: 0.25rem !important;
}

.pt-1,
.py-1 {
  padding-top: 0.25rem !important;
}

.pr-1,
.px-1 {
  padding-right: 0.25rem !important;
}

.pb-1,
.py-1 {
  padding-bottom: 0.25rem !important;
}

.pl-1,
.px-1 {
  padding-left: 0.25rem !important;
}

.p-2 {
  padding: 0.5rem !important;
}

.pt-2,
.py-2 {
  padding-top: 0.5rem !important;
}

.pr-2,
.px-2 {
  padding-right: 0.5rem !important;
}

.pb-2,
.py-2 {
  padding-bottom: 0.5rem !important;
}

.pl-2,
.px-2 {
  padding-left: 0.5rem !important;
}

.p-3 {
  padding: 1.1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.p-5 {
  padding: 2rem !important;
}

.pt-3,
.py-3 {
  padding-top: 1rem !important;
}

.pr-3,
.px-3 {
  padding-right: 1rem !important;
}

.pb-3,
.py-3 {
  padding-bottom: 1rem !important;
}

.pl-3,
.px-3 {
  padding-left: 1rem !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.pt-4,
.py-4 {
  padding-top: 1.5rem !important;
}

.pr-4,
.px-4 {
  padding-right: 1.5rem !important;
}

.pb-4,
.py-4 {
  padding-bottom: 1.5rem !important;
}

.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}

.p-5 {
  padding: 3rem !important;
}

.pt-5,
.py-5 {
  padding-top: 3rem !important;
}

.pr-5,
.px-5 {
  padding-right: 3rem !important;
}

.pb-5,
.py-5 {
  padding-bottom: 3rem !important;
}

.pl-5,
.px-5 {
  padding-left: 3rem !important;
}

.m-n1 {
  margin: -0.25rem !important;
}

.mt-n1,
.my-n1 {
  margin-top: -0.25rem !important;
}

.mr-n1,
.mx-n1 {
  margin-right: -0.25rem !important;
}

.mb-n1,
.my-n1 {
  margin-bottom: -0.25rem !important;
}

.ml-n1,
.mx-n1 {
  margin-left: -0.25rem !important;
}

.m-n2 {
  margin: -0.5rem !important;
}

.mt-n2,
.my-n2 {
  margin-top: -0.5rem !important;
}

.mr-n2,
.mx-n2 {
  margin-right: -0.5rem !important;
}

.mb-n2,
.my-n2 {
  margin-bottom: -0.5rem !important;
}

.ml-n2,
.mx-n2 {
  margin-left: -0.5rem !important;
}

.m-n3 {
  margin: -1rem !important;
}

.mt-n3,
.my-n3 {
  margin-top: -1rem !important;
}

.mr-n3,
.mx-n3 {
  margin-right: -1rem !important;
}

.mb-n3,
.my-n3 {
  margin-bottom: -1rem !important;
}

.ml-n3,
.mx-n3 {
  margin-left: -1rem !important;
}

.m-n4 {
  margin: -1.5rem !important;
}

.mt-n4,
.my-n4 {
  margin-top: -1.5rem !important;
}

.mr-n4,
.mx-n4 {
  margin-right: -1.5rem !important;
}

.mb-n4,
.my-n4 {
  margin-bottom: -1.5rem !important;
}

.ml-n4,
.mx-n4 {
  margin-left: -1.5rem !important;
}

.m-n5 {
  margin: -3rem !important;
}

.mt-n5,
.my-n5 {
  margin-top: -3rem !important;
}

.mr-n5,
.mx-n5 {
  margin-right: -3rem !important;
}

.mb-n5,
.my-n5 {
  margin-bottom: -3rem !important;
}

.ml-n5,
.mx-n5 {
  margin-left: -3rem !important;
}

.m-auto {
  margin: auto !important;
}

.mt-auto,
.my-auto {
  margin-top: auto !important;
}

.mr-auto,
.mx-auto {
  margin-right: auto !important;
}

.mb-auto,
.my-auto {
  margin-bottom: auto !important;
}

.ml-auto,
.mx-auto {
  margin-left: auto !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
      margin: 0 !important;
  }
  .mt-sm-0,
  .my-sm-0 {
      margin-top: 0 !important;
  }
  .mr-sm-0,
  .mx-sm-0 {
      margin-right: 0 !important;
  }
  .mb-sm-0,
  .my-sm-0 {
      margin-bottom: 0 !important;
  }
  .ml-sm-0,
  .mx-sm-0 {
      margin-left: 0 !important;
  }
  .m-sm-1 {
      margin: 0.25rem !important;
  }
  .mt-sm-1,
  .my-sm-1 {
      margin-top: 0.25rem !important;
  }
  .mr-sm-1,
  .mx-sm-1 {
      margin-right: 0.25rem !important;
  }
  .mb-sm-1,
  .my-sm-1 {
      margin-bottom: 0.25rem !important;
  }
  .ml-sm-1,
  .mx-sm-1 {
      margin-left: 0.25rem !important;
  }
  .m-sm-2 {
      margin: 0.5rem !important;
  }
  .mt-sm-2,
  .my-sm-2 {
      margin-top: 0.5rem !important;
  }
  .mr-sm-2,
  .mx-sm-2 {
      margin-right: 0.5rem !important;
  }
  .mb-sm-2,
  .my-sm-2 {
      margin-bottom: 0.5rem !important;
  }
  .ml-sm-2,
  .mx-sm-2 {
      margin-left: 0.5rem !important;
  }
  .m-sm-3 {
      margin: 1rem !important;
  }
  .mt-sm-3,
  .my-sm-3 {
      margin-top: 1rem !important;
  }
  .mr-sm-3,
  .mx-sm-3 {
      margin-right: 1rem !important;
  }
  .mb-sm-3,
  .my-sm-3 {
      margin-bottom: 1rem !important;
  }
  .ml-sm-3,
  .mx-sm-3 {
      margin-left: 1rem !important;
  }
  .m-sm-4 {
      margin: 1.5rem !important;
  }
  .mt-sm-4,
  .my-sm-4 {
      margin-top: 1.5rem !important;
  }
  .mr-sm-4,
  .mx-sm-4 {
      margin-right: 1.5rem !important;
  }
  .mb-sm-4,
  .my-sm-4 {
      margin-bottom: 1.5rem !important;
  }
  .ml-sm-4,
  .mx-sm-4 {
      margin-left: 1.5rem !important;
  }
  .m-sm-5 {
      margin: 3rem !important;
  }
  .mt-sm-5,
  .my-sm-5 {
      margin-top: 3rem !important;
  }
  .mr-sm-5,
  .mx-sm-5 {
      margin-right: 3rem !important;
  }
  .mb-sm-5,
  .my-sm-5 {
      margin-bottom: 3rem !important;
  }
  .ml-sm-5,
  .mx-sm-5 {
      margin-left: 3rem !important;
  }
  .p-sm-0 {
      padding: 0 !important;
  }
  .pt-sm-0,
  .py-sm-0 {
      padding-top: 0 !important;
  }
  .pr-sm-0,
  .px-sm-0 {
      padding-right: 0 !important;
  }
  .pb-sm-0,
  .py-sm-0 {
      padding-bottom: 0 !important;
  }
  .pl-sm-0,
  .px-sm-0 {
      padding-left: 0 !important;
  }
  .p-sm-1 {
      padding: 0.25rem !important;
  }
  .pt-sm-1,
  .py-sm-1 {
      padding-top: 0.25rem !important;
  }
  .pr-sm-1,
  .px-sm-1 {
      padding-right: 0.25rem !important;
  }
  .pb-sm-1,
  .py-sm-1 {
      padding-bottom: 0.25rem !important;
  }
  .pl-sm-1,
  .px-sm-1 {
      padding-left: 0.25rem !important;
  }
  .p-sm-2 {
      padding: 0.5rem !important;
  }
  .pt-sm-2,
  .py-sm-2 {
      padding-top: 0.5rem !important;
  }
  .pr-sm-2,
  .px-sm-2 {
      padding-right: 0.5rem !important;
  }
  .pb-sm-2,
  .py-sm-2 {
      padding-bottom: 0.5rem !important;
  }
  .pl-sm-2,
  .px-sm-2 {
      padding-left: 0.5rem !important;
  }
  .p-sm-3 {
      padding: 1rem !important;
  }
  .pt-sm-3,
  .py-sm-3 {
      padding-top: 1rem !important;
  }
  .pr-sm-3,
  .px-sm-3 {
      padding-right: 1rem !important;
  }
  .pb-sm-3,
  .py-sm-3 {
      padding-bottom: 1rem !important;
  }
  .pl-sm-3,
  .px-sm-3 {
      padding-left: 1rem !important;
  }
  .p-sm-4 {
      padding: 1.5rem !important;
  }
  .pt-sm-4,
  .py-sm-4 {
      padding-top: 1.5rem !important;
  }
  .pr-sm-4,
  .px-sm-4 {
      padding-right: 1.5rem !important;
  }
  .pb-sm-4,
  .py-sm-4 {
      padding-bottom: 1.5rem !important;
  }
  .pl-sm-4,
  .px-sm-4 {
      padding-left: 1.5rem !important;
  }
  .p-sm-5 {
      padding: 3rem !important;
  }
  .pt-sm-5,
  .py-sm-5 {
      padding-top: 3rem !important;
  }
  .pr-sm-5,
  .px-sm-5 {
      padding-right: 3rem !important;
  }
  .pb-sm-5,
  .py-sm-5 {
      padding-bottom: 3rem !important;
  }
  .pl-sm-5,
  .px-sm-5 {
      padding-left: 3rem !important;
  }
  .m-sm-n1 {
      margin: -0.25rem !important;
  }
  .mt-sm-n1,
  .my-sm-n1 {
      margin-top: -0.25rem !important;
  }
  .mr-sm-n1,
  .mx-sm-n1 {
      margin-right: -0.25rem !important;
  }
  .mb-sm-n1,
  .my-sm-n1 {
      margin-bottom: -0.25rem !important;
  }
  .ml-sm-n1,
  .mx-sm-n1 {
      margin-left: -0.25rem !important;
  }
  .m-sm-n2 {
      margin: -0.5rem !important;
  }
  .mt-sm-n2,
  .my-sm-n2 {
      margin-top: -0.5rem !important;
  }
  .mr-sm-n2,
  .mx-sm-n2 {
      margin-right: -0.5rem !important;
  }
  .mb-sm-n2,
  .my-sm-n2 {
      margin-bottom: -0.5rem !important;
  }
  .ml-sm-n2,
  .mx-sm-n2 {
      margin-left: -0.5rem !important;
  }
  .m-sm-n3 {
      margin: -1rem !important;
  }
  .mt-sm-n3,
  .my-sm-n3 {
      margin-top: -1rem !important;
  }
  .mr-sm-n3,
  .mx-sm-n3 {
      margin-right: -1rem !important;
  }
  .mb-sm-n3,
  .my-sm-n3 {
      margin-bottom: -1rem !important;
  }
  .ml-sm-n3,
  .mx-sm-n3 {
      margin-left: -1rem !important;
  }
  .m-sm-n4 {
      margin: -1.5rem !important;
  }
  .mt-sm-n4,
  .my-sm-n4 {
      margin-top: -1.5rem !important;
  }
  .mr-sm-n4,
  .mx-sm-n4 {
      margin-right: -1.5rem !important;
  }
  .mb-sm-n4,
  .my-sm-n4 {
      margin-bottom: -1.5rem !important;
  }
  .ml-sm-n4,
  .mx-sm-n4 {
      margin-left: -1.5rem !important;
  }
  .m-sm-n5 {
      margin: -3rem !important;
  }
  .mt-sm-n5,
  .my-sm-n5 {
      margin-top: -3rem !important;
  }
  .mr-sm-n5,
  .mx-sm-n5 {
      margin-right: -3rem !important;
  }
  .mb-sm-n5,
  .my-sm-n5 {
      margin-bottom: -3rem !important;
  }
  .ml-sm-n5,
  .mx-sm-n5 {
      margin-left: -3rem !important;
  }
  .m-sm-auto {
      margin: auto !important;
  }
  .mt-sm-auto,
  .my-sm-auto {
      margin-top: auto !important;
  }
  .mr-sm-auto,
  .mx-sm-auto {
      margin-right: auto !important;
  }
  .mb-sm-auto,
  .my-sm-auto {
      margin-bottom: auto !important;
  }
  .ml-sm-auto,
  .mx-sm-auto {
      margin-left: auto !important;
  }
}

@media (min-width: 768px) {
  .m-md-0 {
      margin: 0 !important;
  }
  .mt-md-0,
  .my-md-0 {
      margin-top: 0 !important;
  }
  .mr-md-0,
  .mx-md-0 {
      margin-right: 0 !important;
  }
  .mb-md-0,
  .my-md-0 {
      margin-bottom: 0 !important;
  }
  .ml-md-0,
  .mx-md-0 {
      margin-left: 0 !important;
  }
  .m-md-1 {
      margin: 0.25rem !important;
  }
  .mt-md-1,
  .my-md-1 {
      margin-top: 0.25rem !important;
  }
  .mr-md-1,
  .mx-md-1 {
      margin-right: 0.25rem !important;
  }
  .mb-md-1,
  .my-md-1 {
      margin-bottom: 0.25rem !important;
  }
  .ml-md-1,
  .mx-md-1 {
      margin-left: 0.25rem !important;
  }
  .m-md-2 {
      margin: 0.5rem !important;
  }
  .mt-md-2,
  .my-md-2 {
      margin-top: 0.5rem !important;
  }
  .mr-md-2,
  .mx-md-2 {
      margin-right: 0.5rem !important;
  }
  .mb-md-2,
  .my-md-2 {
      margin-bottom: 0.5rem !important;
  }
  .ml-md-2,
  .mx-md-2 {
      margin-left: 0.5rem !important;
  }
  .m-md-3 {
      margin: 1rem !important;
  }
  .mt-md-3,
  .my-md-3 {
      margin-top: 1rem !important;
  }
  .mr-md-3,
  .mx-md-3 {
      margin-right: 1rem !important;
  }
  .mb-md-3,
  .my-md-3 {
      margin-bottom: 1rem !important;
  }
  .ml-md-3,
  .mx-md-3 {
      margin-left: 1rem !important;
  }
  .m-md-4 {
      margin: 1.5rem !important;
  }
  .mt-md-4,
  .my-md-4 {
      margin-top: 1.5rem !important;
  }
  .mr-md-4,
  .mx-md-4 {
      margin-right: 1.5rem !important;
  }
  .mb-md-4,
  .my-md-4 {
      margin-bottom: 1.5rem !important;
  }
  .ml-md-4,
  .mx-md-4 {
      margin-left: 1.5rem !important;
  }
  .m-md-5 {
      margin: 3rem !important;
  }
  .mt-md-5,
  .my-md-5 {
      margin-top: 3rem !important;
  }
  .mr-md-5,
  .mx-md-5 {
      margin-right: 3rem !important;
  }
  .mb-md-5,
  .my-md-5 {
      margin-bottom: 3rem !important;
  }
  .ml-md-5,
  .mx-md-5 {
      margin-left: 3rem !important;
  }
  .p-md-0 {
      padding: 0 !important;
  }
  .pt-md-0,
  .py-md-0 {
      padding-top: 0 !important;
  }
  .pr-md-0,
  .px-md-0 {
      padding-right: 0 !important;
  }
  .pb-md-0,
  .py-md-0 {
      padding-bottom: 0 !important;
  }
  .pl-md-0,
  .px-md-0 {
      padding-left: 0 !important;
  }
  .p-md-1 {
      padding: 0.25rem !important;
  }
  .pt-md-1,
  .py-md-1 {
      padding-top: 0.25rem !important;
  }
  .pr-md-1,
  .px-md-1 {
      padding-right: 0.25rem !important;
  }
  .pb-md-1,
  .py-md-1 {
      padding-bottom: 0.25rem !important;
  }
  .pl-md-1,
  .px-md-1 {
      padding-left: 0.25rem !important;
  }
  .p-md-2 {
      padding: 0.5rem !important;
  }
  .pt-md-2,
  .py-md-2 {
      padding-top: 0.5rem !important;
  }
  .pr-md-2,
  .px-md-2 {
      padding-right: 0.5rem !important;
  }
  .pb-md-2,
  .py-md-2 {
      padding-bottom: 0.5rem !important;
  }
  .pl-md-2,
  .px-md-2 {
      padding-left: 0.5rem !important;
  }
  .p-md-3 {
      padding: 1rem !important;
  }
  .pt-md-3,
  .py-md-3 {
      padding-top: 1rem !important;
  }
  .pr-md-3,
  .px-md-3 {
      padding-right: 1rem !important;
  }
  .pb-md-3,
  .py-md-3 {
      padding-bottom: 1rem !important;
  }
  .pl-md-3,
  .px-md-3 {
      padding-left: 1rem !important;
  }
  .p-md-4 {
      padding: 1.5rem !important;
  }
  .pt-md-4,
  .py-md-4 {
      padding-top: 1.5rem !important;
  }
  .pr-md-4,
  .px-md-4 {
      padding-right: 1.5rem !important;
  }
  .pb-md-4,
  .py-md-4 {
      padding-bottom: 1.5rem !important;
  }
  .pl-md-4,
  .px-md-4 {
      padding-left: 1.5rem !important;
  }
  .p-md-5 {
      padding: 3rem !important;
  }
  .pt-md-5,
  .py-md-5 {
      padding-top: 3rem !important;
  }
  .pr-md-5,
  .px-md-5 {
      padding-right: 3rem !important;
  }
  .pb-md-5,
  .py-md-5 {
      padding-bottom: 3rem !important;
  }
  .pl-md-5,
  .px-md-5 {
      padding-left: 3rem !important;
  }
  .m-md-n1 {
      margin: -0.25rem !important;
  }
  .mt-md-n1,
  .my-md-n1 {
      margin-top: -0.25rem !important;
  }
  .mr-md-n1,
  .mx-md-n1 {
      margin-right: -0.25rem !important;
  }
  .mb-md-n1,
  .my-md-n1 {
      margin-bottom: -0.25rem !important;
  }
  .ml-md-n1,
  .mx-md-n1 {
      margin-left: -0.25rem !important;
  }
  .m-md-n2 {
      margin: -0.5rem !important;
  }
  .mt-md-n2,
  .my-md-n2 {
      margin-top: -0.5rem !important;
  }
  .mr-md-n2,
  .mx-md-n2 {
      margin-right: -0.5rem !important;
  }
  .mb-md-n2,
  .my-md-n2 {
      margin-bottom: -0.5rem !important;
  }
  .ml-md-n2,
  .mx-md-n2 {
      margin-left: -0.5rem !important;
  }
  .m-md-n3 {
      margin: -1rem !important;
  }
  .mt-md-n3,
  .my-md-n3 {
      margin-top: -1rem !important;
  }
  .mr-md-n3,
  .mx-md-n3 {
      margin-right: -1rem !important;
  }
  .mb-md-n3,
  .my-md-n3 {
      margin-bottom: -1rem !important;
  }
  .ml-md-n3,
  .mx-md-n3 {
      margin-left: -1rem !important;
  }
  .m-md-n4 {
      margin: -1.5rem !important;
  }
  .mt-md-n4,
  .my-md-n4 {
      margin-top: -1.5rem !important;
  }
  .mr-md-n4,
  .mx-md-n4 {
      margin-right: -1.5rem !important;
  }
  .mb-md-n4,
  .my-md-n4 {
      margin-bottom: -1.5rem !important;
  }
  .ml-md-n4,
  .mx-md-n4 {
      margin-left: -1.5rem !important;
  }
  .m-md-n5 {
      margin: -3rem !important;
  }
  .mt-md-n5,
  .my-md-n5 {
      margin-top: -3rem !important;
  }
  .mr-md-n5,
  .mx-md-n5 {
      margin-right: -3rem !important;
  }
  .mb-md-n5,
  .my-md-n5 {
      margin-bottom: -3rem !important;
  }
  .ml-md-n5,
  .mx-md-n5 {
      margin-left: -3rem !important;
  }
  .m-md-auto {
      margin: auto !important;
  }
  .mt-md-auto,
  .my-md-auto {
      margin-top: auto !important;
  }
  .mr-md-auto,
  .mx-md-auto {
      margin-right: auto !important;
  }
  .mb-md-auto,
  .my-md-auto {
      margin-bottom: auto !important;
  }
  .ml-md-auto,
  .mx-md-auto {
      margin-left: auto !important;
  }
}

@media (min-width: 992px) {
  .m-lg-0 {
      margin: 0 !important;
  }
  .mt-lg-0,
  .my-lg-0 {
      margin-top: 0 !important;
  }
  .mr-lg-0,
  .mx-lg-0 {
      margin-right: 0 !important;
  }
  .mb-lg-0,
  .my-lg-0 {
      margin-bottom: 0 !important;
  }
  .ml-lg-0,
  .mx-lg-0 {
      margin-left: 0 !important;
  }
  .m-lg-1 {
      margin: 0.25rem !important;
  }
  .mt-lg-1,
  .my-lg-1 {
      margin-top: 0.25rem !important;
  }
  .mr-lg-1,
  .mx-lg-1 {
      margin-right: 0.25rem !important;
  }
  .mb-lg-1,
  .my-lg-1 {
      margin-bottom: 0.25rem !important;
  }
  .ml-lg-1,
  .mx-lg-1 {
      margin-left: 0.25rem !important;
  }
  .m-lg-2 {
      margin: 0.5rem !important;
  }
  .mt-lg-2,
  .my-lg-2 {
      margin-top: 0.5rem !important;
  }
  .mr-lg-2,
  .mx-lg-2 {
      margin-right: 0.5rem !important;
  }
  .mb-lg-2,
  .my-lg-2 {
      margin-bottom: 0.5rem !important;
  }
  .ml-lg-2,
  .mx-lg-2 {
      margin-left: 0.5rem !important;
  }
  .m-lg-3 {
      margin: 1rem !important;
  }
  .mt-lg-3,
  .my-lg-3 {
      margin-top: 1rem !important;
  }
  .mr-lg-3,
  .mx-lg-3 {
      margin-right: 1rem !important;
  }
  .mb-lg-3,
  .my-lg-3 {
      margin-bottom: 1rem !important;
  }
  .ml-lg-3,
  .mx-lg-3 {
      margin-left: 1rem !important;
  }
  .m-lg-4 {
      margin: 1.5rem !important;
  }
  .mt-lg-4,
  .my-lg-4 {
      margin-top: 1.5rem !important;
  }
  .mr-lg-4,
  .mx-lg-4 {
      margin-right: 1.5rem !important;
  }
  .mb-lg-4,
  .my-lg-4 {
      margin-bottom: 1.5rem !important;
  }
  .ml-lg-4,
  .mx-lg-4 {
      margin-left: 1.5rem !important;
  }
  .m-lg-5 {
      margin: 3rem !important;
  }
  .mt-lg-5,
  .my-lg-5 {
      margin-top: 3rem !important;
  }
  .mr-lg-5,
  .mx-lg-5 {
      margin-right: 3rem !important;
  }
  .mb-lg-5,
  .my-lg-5 {
      margin-bottom: 3rem !important;
  }
  .ml-lg-5,
  .mx-lg-5 {
      margin-left: 3rem !important;
  }
  .p-lg-0 {
      padding: 0 !important;
  }
  .pt-lg-0,
  .py-lg-0 {
      padding-top: 0 !important;
  }
  .pr-lg-0,
  .px-lg-0 {
      padding-right: 0 !important;
  }
  .pb-lg-0,
  .py-lg-0 {
      padding-bottom: 0 !important;
  }
  .pl-lg-0,
  .px-lg-0 {
      padding-left: 0 !important;
  }
  .p-lg-1 {
      padding: 0.25rem !important;
  }
  .pt-lg-1,
  .py-lg-1 {
      padding-top: 0.25rem !important;
  }
  .pr-lg-1,
  .px-lg-1 {
      padding-right: 0.25rem !important;
  }
  .pb-lg-1,
  .py-lg-1 {
      padding-bottom: 0.25rem !important;
  }
  .pl-lg-1,
  .px-lg-1 {
      padding-left: 0.25rem !important;
  }
  .p-lg-2 {
      padding: 0.5rem !important;
  }
  .pt-lg-2,
  .py-lg-2 {
      padding-top: 0.5rem !important;
  }
  .pr-lg-2,
  .px-lg-2 {
      padding-right: 0.5rem !important;
  }
  .pb-lg-2,
  .py-lg-2 {
      padding-bottom: 0.5rem !important;
  }
  .pl-lg-2,
  .px-lg-2 {
      padding-left: 0.5rem !important;
  }
  .p-lg-3 {
      padding: 1rem !important;
  }
  .pt-lg-3,
  .py-lg-3 {
      padding-top: 1rem !important;
  }
  .pr-lg-3,
  .px-lg-3 {
      padding-right: 1rem !important;
  }
  .pb-lg-3,
  .py-lg-3 {
      padding-bottom: 1rem !important;
  }
  .pl-lg-3,
  .px-lg-3 {
      padding-left: 1rem !important;
  }
  .p-lg-4 {
      padding: 1.5rem !important;
  }
  .pt-lg-4,
  .py-lg-4 {
      padding-top: 1.5rem !important;
  }
  .pr-lg-4,
  .px-lg-4 {
      padding-right: 1.5rem !important;
  }
  .pb-lg-4,
  .py-lg-4 {
      padding-bottom: 1.5rem !important;
  }
  .pl-lg-4,
  .px-lg-4 {
      padding-left: 1.5rem !important;
  }
  .p-lg-5 {
      padding: 3rem !important;
  }
  .pt-lg-5,
  .py-lg-5 {
      padding-top: 3rem !important;
  }
  .pr-lg-5,
  .px-lg-5 {
      padding-right: 3rem !important;
  }
  .pb-lg-5,
  .py-lg-5 {
      padding-bottom: 3rem !important;
  }
  .pl-lg-5,
  .px-lg-5 {
      padding-left: 3rem !important;
  }
  .m-lg-n1 {
      margin: -0.25rem !important;
  }
  .mt-lg-n1,
  .my-lg-n1 {
      margin-top: -0.25rem !important;
  }
  .mr-lg-n1,
  .mx-lg-n1 {
      margin-right: -0.25rem !important;
  }
  .mb-lg-n1,
  .my-lg-n1 {
      margin-bottom: -0.25rem !important;
  }
  .ml-lg-n1,
  .mx-lg-n1 {
      margin-left: -0.25rem !important;
  }
  .m-lg-n2 {
      margin: -0.5rem !important;
  }
  .mt-lg-n2,
  .my-lg-n2 {
      margin-top: -0.5rem !important;
  }
  .mr-lg-n2,
  .mx-lg-n2 {
      margin-right: -0.5rem !important;
  }
  .mb-lg-n2,
  .my-lg-n2 {
      margin-bottom: -0.5rem !important;
  }
  .ml-lg-n2,
  .mx-lg-n2 {
      margin-left: -0.5rem !important;
  }
  .m-lg-n3 {
      margin: -1rem !important;
  }
  .mt-lg-n3,
  .my-lg-n3 {
      margin-top: -1rem !important;
  }
  .mr-lg-n3,
  .mx-lg-n3 {
      margin-right: -1rem !important;
  }
  .mb-lg-n3,
  .my-lg-n3 {
      margin-bottom: -1rem !important;
  }
  .ml-lg-n3,
  .mx-lg-n3 {
      margin-left: -1rem !important;
  }
  .m-lg-n4 {
      margin: -1.5rem !important;
  }
  .mt-lg-n4,
  .my-lg-n4 {
      margin-top: -1.5rem !important;
  }
  .mr-lg-n4,
  .mx-lg-n4 {
      margin-right: -1.5rem !important;
  }
  .mb-lg-n4,
  .my-lg-n4 {
      margin-bottom: -1.5rem !important;
  }
  .ml-lg-n4,
  .mx-lg-n4 {
      margin-left: -1.5rem !important;
  }
  .m-lg-n5 {
      margin: -3rem !important;
  }
  .mt-lg-n5,
  .my-lg-n5 {
      margin-top: -3rem !important;
  }
  .mr-lg-n5,
  .mx-lg-n5 {
      margin-right: -3rem !important;
  }
  .mb-lg-n5,
  .my-lg-n5 {
      margin-bottom: -3rem !important;
  }
  .ml-lg-n5,
  .mx-lg-n5 {
      margin-left: -3rem !important;
  }
  .m-lg-auto {
      margin: auto !important;
  }
  .mt-lg-auto,
  .my-lg-auto {
      margin-top: auto !important;
  }
  .mr-lg-auto,
  .mx-lg-auto {
      margin-right: auto !important;
  }
  .mb-lg-auto,
  .my-lg-auto {
      margin-bottom: auto !important;
  }
  .ml-lg-auto,
  .mx-lg-auto {
      margin-left: auto !important;
  }
}

@media (min-width: 1200px) {
  .m-xl-0 {
      margin: 0 !important;
  }
  .mt-xl-0,
  .my-xl-0 {
      margin-top: 0 !important;
  }
  .mr-xl-0,
  .mx-xl-0 {
      margin-right: 0 !important;
  }
  .mb-xl-0,
  .my-xl-0 {
      margin-bottom: 0 !important;
  }
  .ml-xl-0,
  .mx-xl-0 {
      margin-left: 0 !important;
  }
  .m-xl-1 {
      margin: 0.25rem !important;
  }
  .mt-xl-1,
  .my-xl-1 {
      margin-top: 0.25rem !important;
  }
  .mr-xl-1,
  .mx-xl-1 {
      margin-right: 0.25rem !important;
  }
  .mb-xl-1,
  .my-xl-1 {
      margin-bottom: 0.25rem !important;
  }
  .ml-xl-1,
  .mx-xl-1 {
      margin-left: 0.25rem !important;
  }
  .m-xl-2 {
      margin: 0.5rem !important;
  }
  .mt-xl-2,
  .my-xl-2 {
      margin-top: 0.5rem !important;
  }
  .mr-xl-2,
  .mx-xl-2 {
      margin-right: 0.5rem !important;
  }
  .mb-xl-2,
  .my-xl-2 {
      margin-bottom: 0.5rem !important;
  }
  .ml-xl-2,
  .mx-xl-2 {
      margin-left: 0.5rem !important;
  }
  .m-xl-3 {
      margin: 1rem !important;
  }
  .mt-xl-3,
  .my-xl-3 {
      margin-top: 1rem !important;
  }
  .mr-xl-3,
  .mx-xl-3 {
      margin-right: 1rem !important;
  }
  .mb-xl-3,
  .my-xl-3 {
      margin-bottom: 1rem !important;
  }
  .ml-xl-3,
  .mx-xl-3 {
      margin-left: 1rem !important;
  }
  .m-xl-4 {
      margin: 1.5rem !important;
  }
  .mt-xl-4,
  .my-xl-4 {
      margin-top: 1.5rem !important;
  }
  .mr-xl-4,
  .mx-xl-4 {
      margin-right: 1.5rem !important;
  }
  .mb-xl-4,
  .my-xl-4 {
      margin-bottom: 1.5rem !important;
  }
  .ml-xl-4,
  .mx-xl-4 {
      margin-left: 1.5rem !important;
  }
  .m-xl-5 {
      margin: 3rem !important;
  }
  .mt-xl-5,
  .my-xl-5 {
      margin-top: 3rem !important;
  }
  .mr-xl-5,
  .mx-xl-5 {
      margin-right: 3rem !important;
  }
  .mb-xl-5,
  .my-xl-5 {
      margin-bottom: 3rem !important;
  }
  .ml-xl-5,
  .mx-xl-5 {
      margin-left: 3rem !important;
  }
  .p-xl-0 {
      padding: 0 !important;
  }
  .pt-xl-0,
  .py-xl-0 {
      padding-top: 0 !important;
  }
  .pr-xl-0,
  .px-xl-0 {
      padding-right: 0 !important;
  }
  .pb-xl-0,
  .py-xl-0 {
      padding-bottom: 0 !important;
  }
  .pl-xl-0,
  .px-xl-0 {
      padding-left: 0 !important;
  }
  .p-xl-1 {
      padding: 0.25rem !important;
  }
  .pt-xl-1,
  .py-xl-1 {
      padding-top: 0.25rem !important;
  }
  .pr-xl-1,
  .px-xl-1 {
      padding-right: 0.25rem !important;
  }
  .pb-xl-1,
  .py-xl-1 {
      padding-bottom: 0.25rem !important;
  }
  .pl-xl-1,
  .px-xl-1 {
      padding-left: 0.25rem !important;
  }
  .p-xl-2 {
      padding: 0.5rem !important;
  }
  .pt-xl-2,
  .py-xl-2 {
      padding-top: 0.5rem !important;
  }
  .pr-xl-2,
  .px-xl-2 {
      padding-right: 0.5rem !important;
  }
  .pb-xl-2,
  .py-xl-2 {
      padding-bottom: 0.5rem !important;
  }
  .pl-xl-2,
  .px-xl-2 {
      padding-left: 0.5rem !important;
  }
  .p-xl-3 {
      padding: 1rem !important;
  }
  .pt-xl-3,
  .py-xl-3 {
      padding-top: 1rem !important;
  }
  .pr-xl-3,
  .px-xl-3 {
      padding-right: 1rem !important;
  }
  .pb-xl-3,
  .py-xl-3 {
      padding-bottom: 1rem !important;
  }
  .pl-xl-3,
  .px-xl-3 {
      padding-left: 1rem !important;
  }
  .p-xl-4 {
      padding: 1.5rem !important;
  }
  .pt-xl-4,
  .py-xl-4 {
      padding-top: 1.5rem !important;
  }
  .pr-xl-4,
  .px-xl-4 {
      padding-right: 1.5rem !important;
  }
  .pb-xl-4,
  .py-xl-4 {
      padding-bottom: 1.5rem !important;
  }
  .pl-xl-4,
  .px-xl-4 {
      padding-left: 1.5rem !important;
  }
  .p-xl-5 {
      padding: 3rem !important;
  }
  .pt-xl-5,
  .py-xl-5 {
      padding-top: 3rem !important;
  }
  .pr-xl-5,
  .px-xl-5 {
      padding-right: 3rem !important;
  }
  .pb-xl-5,
  .py-xl-5 {
      padding-bottom: 3rem !important;
  }
  .pl-xl-5,
  .px-xl-5 {
      padding-left: 3rem !important;
  }
  .m-xl-n1 {
      margin: -0.25rem !important;
  }
  .mt-xl-n1,
  .my-xl-n1 {
      margin-top: -0.25rem !important;
  }
  .mr-xl-n1,
  .mx-xl-n1 {
      margin-right: -0.25rem !important;
  }
  .mb-xl-n1,
  .my-xl-n1 {
      margin-bottom: -0.25rem !important;
  }
  .ml-xl-n1,
  .mx-xl-n1 {
      margin-left: -0.25rem !important;
  }
  .m-xl-n2 {
      margin: -0.5rem !important;
  }
  .mt-xl-n2,
  .my-xl-n2 {
      margin-top: -0.5rem !important;
  }
  .mr-xl-n2,
  .mx-xl-n2 {
      margin-right: -0.5rem !important;
  }
  .mb-xl-n2,
  .my-xl-n2 {
      margin-bottom: -0.5rem !important;
  }
  .ml-xl-n2,
  .mx-xl-n2 {
      margin-left: -0.5rem !important;
  }
  .m-xl-n3 {
      margin: -1rem !important;
  }
  .mt-xl-n3,
  .my-xl-n3 {
      margin-top: -1rem !important;
  }
  .mr-xl-n3,
  .mx-xl-n3 {
      margin-right: -1rem !important;
  }
  .mb-xl-n3,
  .my-xl-n3 {
      margin-bottom: -1rem !important;
  }
  .ml-xl-n3,
  .mx-xl-n3 {
      margin-left: -1rem !important;
  }
  .m-xl-n4 {
      margin: -1.5rem !important;
  }
  .mt-xl-n4,
  .my-xl-n4 {
      margin-top: -1.5rem !important;
  }
  .mr-xl-n4,
  .mx-xl-n4 {
      margin-right: -1.5rem !important;
  }
  .mb-xl-n4,
  .my-xl-n4 {
      margin-bottom: -1.5rem !important;
  }
  .ml-xl-n4,
  .mx-xl-n4 {
      margin-left: -1.5rem !important;
  }
  .m-xl-n5 {
      margin: -3rem !important;
  }
  .mt-xl-n5,
  .my-xl-n5 {
      margin-top: -3rem !important;
  }
  .mr-xl-n5,
  .mx-xl-n5 {
      margin-right: -3rem !important;
  }
  .mb-xl-n5,
  .my-xl-n5 {
      margin-bottom: -3rem !important;
  }
  .ml-xl-n5,
  .mx-xl-n5 {
      margin-left: -3rem !important;
  }
  .m-xl-auto {
      margin: auto !important;
  }
  .mt-xl-auto,
  .my-xl-auto {
      margin-top: auto !important;
  }
  .mr-xl-auto,
  .mx-xl-auto {
      margin-right: auto !important;
  }
  .mb-xl-auto,
  .my-xl-auto {
      margin-bottom: auto !important;
  }
  .ml-xl-auto,
  .mx-xl-auto {
      margin-left: auto !important;
  }
}

@media (min-width: 1440) {
  .m-xxl-0 {
      margin: 0 !important;
  }
  .mt-xxl-0,
  .my-xxl-0 {
      margin-top: 0 !important;
  }
  .mr-xxl-0,
  .mx-xxl-0 {
      margin-right: 0 !important;
  }
  .mb-xxl-0,
  .my-xxl-0 {
      margin-bottom: 0 !important;
  }
  .ml-xxl-0,
  .mx-xxl-0 {
      margin-left: 0 !important;
  }
  .m-xxl-1 {
      margin: 0.25rem !important;
  }
  .mt-xxl-1,
  .my-xxl-1 {
      margin-top: 0.25rem !important;
  }
  .mr-xxl-1,
  .mx-xxl-1 {
      margin-right: 0.25rem !important;
  }
  .mb-xxl-1,
  .my-xxl-1 {
      margin-bottom: 0.25rem !important;
  }
  .ml-xxl-1,
  .mx-xxl-1 {
      margin-left: 0.25rem !important;
  }
  .m-xxl-2 {
      margin: 0.5rem !important;
  }
  .mt-xxl-2,
  .my-xxl-2 {
      margin-top: 0.5rem !important;
  }
  .mr-xxl-2,
  .mx-xxl-2 {
      margin-right: 0.5rem !important;
  }
  .mb-xxl-2,
  .my-xxl-2 {
      margin-bottom: 0.5rem !important;
  }
  .ml-xxl-2,
  .mx-xxl-2 {
      margin-left: 0.5rem !important;
  }
  .m-xxl-3 {
      margin: 1rem !important;
  }
  .mt-xxl-3,
  .my-xxl-3 {
      margin-top: 1rem !important;
  }
  .mr-xxl-3,
  .mx-xxl-3 {
      margin-right: 1rem !important;
  }
  .mb-xxl-3,
  .my-xxl-3 {
      margin-bottom: 1rem !important;
  }
  .ml-xxl-3,
  .mx-xxl-3 {
      margin-left: 1rem !important;
  }
  .m-xxl-4 {
      margin: 1.5rem !important;
  }
  .mt-xxl-4,
  .my-xxl-4 {
      margin-top: 1.5rem !important;
  }
  .mr-xxl-4,
  .mx-xxl-4 {
      margin-right: 1.5rem !important;
  }
  .mb-xxl-4,
  .my-xxl-4 {
      margin-bottom: 1.5rem !important;
  }
  .ml-xxl-4,
  .mx-xxl-4 {
      margin-left: 1.5rem !important;
  }
  .m-xxl-5 {
      margin: 3rem !important;
  }
  .mt-xxl-5,
  .my-xxl-5 {
      margin-top: 3rem !important;
  }
  .mr-xxl-5,
  .mx-xxl-5 {
      margin-right: 3rem !important;
  }
  .mb-xxl-5,
  .my-xxl-5 {
      margin-bottom: 3rem !important;
  }
  .ml-xxl-5,
  .mx-xxl-5 {
      margin-left: 3rem !important;
  }
  .p-xxl-0 {
      padding: 0 !important;
  }
  .pt-xxl-0,
  .py-xxl-0 {
      padding-top: 0 !important;
  }
  .pr-xxl-0,
  .px-xxl-0 {
      padding-right: 0 !important;
  }
  .pb-xxl-0,
  .py-xxl-0 {
      padding-bottom: 0 !important;
  }
  .pl-xxl-0,
  .px-xxl-0 {
      padding-left: 0 !important;
  }
  .p-xxl-1 {
      padding: 0.25rem !important;
  }
  .pt-xxl-1,
  .py-xxl-1 {
      padding-top: 0.25rem !important;
  }
  .pr-xxl-1,
  .px-xxl-1 {
      padding-right: 0.25rem !important;
  }
  .pb-xxl-1,
  .py-xxl-1 {
      padding-bottom: 0.25rem !important;
  }
  .pl-xxl-1,
  .px-xxl-1 {
      padding-left: 0.25rem !important;
  }
  .p-xxl-2 {
      padding: 0.5rem !important;
  }
  .pt-xxl-2,
  .py-xxl-2 {
      padding-top: 0.5rem !important;
  }
  .pr-xxl-2,
  .px-xxl-2 {
      padding-right: 0.5rem !important;
  }
  .pb-xxl-2,
  .py-xxl-2 {
      padding-bottom: 0.5rem !important;
  }
  .pl-xxl-2,
  .px-xxl-2 {
      padding-left: 0.5rem !important;
  }
  .p-xxl-3 {
      padding: 1rem !important;
  }
  .pt-xxl-3,
  .py-xxl-3 {
      padding-top: 1rem !important;
  }
  .pr-xxl-3,
  .px-xxl-3 {
      padding-right: 1rem !important;
  }
  .pb-xxl-3,
  .py-xxl-3 {
      padding-bottom: 1rem !important;
  }
  .pl-xxl-3,
  .px-xxl-3 {
      padding-left: 1rem !important;
  }
  .p-xxl-4 {
      padding: 1.5rem !important;
  }
  .pt-xxl-4,
  .py-xxl-4 {
      padding-top: 1.5rem !important;
  }
  .pr-xxl-4,
  .px-xxl-4 {
      padding-right: 1.5rem !important;
  }
  .pb-xxl-4,
  .py-xxl-4 {
      padding-bottom: 1.5rem !important;
  }
  .pl-xxl-4,
  .px-xxl-4 {
      padding-left: 1.5rem !important;
  }
  .p-xxl-5 {
      padding: 3rem !important;
  }
  .pt-xxl-5,
  .py-xxl-5 {
      padding-top: 3rem !important;
  }
  .pr-xxl-5,
  .px-xxl-5 {
      padding-right: 3rem !important;
  }
  .pb-xxl-5,
  .py-xxl-5 {
      padding-bottom: 3rem !important;
  }
  .pl-xxl-5,
  .px-xxl-5 {
      padding-left: 3rem !important;
  }
  .m-xxl-n1 {
      margin: -0.25rem !important;
  }
  .mt-xxl-n1,
  .my-xxl-n1 {
      margin-top: -0.25rem !important;
  }
  .mr-xxl-n1,
  .mx-xxl-n1 {
      margin-right: -0.25rem !important;
  }
  .mb-xxl-n1,
  .my-xxl-n1 {
      margin-bottom: -0.25rem !important;
  }
  .ml-xxl-n1,
  .mx-xxl-n1 {
      margin-left: -0.25rem !important;
  }
  .m-xxl-n2 {
      margin: -0.5rem !important;
  }
  .mt-xxl-n2,
  .my-xxl-n2 {
      margin-top: -0.5rem !important;
  }
  .mr-xxl-n2,
  .mx-xxl-n2 {
      margin-right: -0.5rem !important;
  }
  .mb-xxl-n2,
  .my-xxl-n2 {
      margin-bottom: -0.5rem !important;
  }
  .ml-xxl-n2,
  .mx-xxl-n2 {
      margin-left: -0.5rem !important;
  }
  .m-xxl-n3 {
      margin: -1rem !important;
  }
  .mt-xxl-n3,
  .my-xxl-n3 {
      margin-top: -1rem !important;
  }
  .mr-xxl-n3,
  .mx-xxl-n3 {
      margin-right: -1rem !important;
  }
  .mb-xxl-n3,
  .my-xxl-n3 {
      margin-bottom: -1rem !important;
  }
  .ml-xxl-n3,
  .mx-xxl-n3 {
      margin-left: -1rem !important;
  }
  .m-xxl-n4 {
      margin: -1.5rem !important;
  }
  .mt-xxl-n4,
  .my-xxl-n4 {
      margin-top: -1.5rem !important;
  }
  .mr-xxl-n4,
  .mx-xxl-n4 {
      margin-right: -1.5rem !important;
  }
  .mb-xxl-n4,
  .my-xxl-n4 {
      margin-bottom: -1.5rem !important;
  }
  .ml-xxl-n4,
  .mx-xxl-n4 {
      margin-left: -1.5rem !important;
  }
  .m-xxl-n5 {
      margin: -3rem !important;
  }
  .mt-xxl-n5,
  .my-xxl-n5 {
      margin-top: -3rem !important;
  }
  .mr-xxl-n5,
  .mx-xxl-n5 {
      margin-right: -3rem !important;
  }
  .mb-xxl-n5,
  .my-xxl-n5 {
      margin-bottom: -3rem !important;
  }
  .ml-xxl-n5,
  .mx-xxl-n5 {
      margin-left: -3rem !important;
  }
  .m-xxl-auto {
      margin: auto !important;
  }
  .mt-xxl-auto,
  .my-xxl-auto {
      margin-top: auto !important;
  }
  .mr-xxl-auto,
  .mx-xxl-auto {
      margin-right: auto !important;
  }
  .mb-xxl-auto,
  .my-xxl-auto {
      margin-bottom: auto !important;
  }
  .ml-xxl-auto,
  .mx-xxl-auto {
      margin-left: auto !important;
  }
}

.stretched-link::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  pointer-events: auto;
  content: "";
  background-color: rgba(0, 0, 0, 0);
}

.text-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
}

.text-justify {
  text-align: justify !important;
}

.text-wrap {
  white-space: normal !important;
}

.text-nowrap {
  white-space: nowrap !important;
}

.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

@media (min-width: 576px) {
  .text-sm-left {
      text-align: left !important;
  }
  .text-sm-right {
      text-align: right !important;
  }
  .text-sm-center {
      text-align: center !important;
  }
}

@media (min-width: 768px) {
  .text-md-left {
      text-align: left !important;
  }
  .text-md-right {
      text-align: right !important;
  }
  .text-md-center {
      text-align: center !important;
  }
}

@media (min-width: 992px) {
  .text-lg-left {
      text-align: left !important;
  }
  .text-lg-right {
      text-align: right !important;
  }
  .text-lg-center {
      text-align: center !important;
  }
}

@media (min-width: 1200px) {
  .text-xl-left {
      text-align: left !important;
  }
  .text-xl-right {
      text-align: right !important;
  }
  .text-xl-center {
      text-align: center !important;
  }
}

@media (min-width: 1440) {
  .text-xxl-left {
      text-align: left !important;
  }
  .text-xxl-right {
      text-align: right !important;
  }
  .text-xxl-center {
      text-align: center !important;
  }
}

.text-lowercase {
  text-transform: lowercase !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.text-capitalize {
  text-transform: capitalize !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-lighter {
  font-weight: lighter !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.font-weight-semibold {
  font-weight: 500 !important;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-bolder {
  font-weight: bolder !important;
}

.font-italic {
  font-style: italic !important;
}

.text-white {
  color: #fff !important;
}

.text-primary {
  color: #43c4d3 !important;
}

a.text-primary:hover,
a.text-primary:focus {
  color: #0c6f5d !important;
}

.text-secondary {
  color: #D07407 !important;
}

a.text-secondary:hover,
a.text-secondary:focus {
  color: #864b05 !important;
}

.text-success {
  color: #2bc155 !important;
}

a.text-success:hover,
a.text-success:focus {
  color: #1d8239 !important;
}

.text-info {
  color: #3C65F5 !important;
}

a.text-info:hover,
a.text-info:focus {
  color: #0b39d9 !important;
}

.text-warning {
  color: #FAFF00 !important;
}

a.text-warning:hover,
a.text-warning:focus {
  color: #afb300 !important;
}

.text-danger {
  color: #B03636 !important;
}

a.text-danger:hover,
a.text-danger:focus {
  color: #752424 !important;
}

.text-light {
  color: #D1D1D1 !important;
}

a.text-light:hover,
a.text-light:focus {
  color: #ababab !important;
}

.text-dark {
  color: #3e4954 !important;
}

a.text-dark:hover,
a.text-dark:focus {
  color: #1e2328 !important;
}

.text-body {
  color: #b7b7b7 !important;
}

.text-muted {
  color: #89879f !important;
}

.text-black-50 {
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-hide {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.text-decoration-none {
  text-decoration: none !important;
}

.text-break {
  word-break: break-word !important;
  word-wrap: break-word !important;
}

.text-reset {
  color: inherit !important;
}

.visible {
  visibility: visible !important;
}

.invisible {
  visibility: hidden !important;
}

@media print {
  *,
  *::before,
  *::after {
      text-shadow: none !important;
      box-shadow: none !important;
  }
  a:not(.btn) {
      text-decoration: underline;
  }
  abbr[title]::after {
      content: " ("attr(title) ")";
  }
  pre {
      white-space: pre-wrap !important;
  }
  pre,
  blockquote {
      border: 1px solid #adb5bd;
      page-break-inside: avoid;
  }
  thead {
      display: table-header-group;
  }
  tr,
  img {
      page-break-inside: avoid;
  }
  p,
  h2,
  h3 {
      orphans: 3;
      widows: 3;
  }
  h2,
  h3 {
      page-break-after: avoid;
  }
  @page {
      size: a3;
  }
  body {
      min-width: 992px !important;
  }
  .container {
      min-width: 992px !important;
  }
  .navbar {
      display: none;
  }
  .badge {
      border: 1px solid #000;
  }
  .table {
      border-collapse: collapse !important;
  }
  .table td,
  .table th {
      background-color: #fff !important;
  }
  .table-bordered th,
  .table-bordered td {
      border: 1px solid #dee2e6 !important;
  }
  .table-dark {
      color: inherit;
  }
  .table-dark th,
  .table-dark td,
  .table-dark thead th,
  .table-dark tbody+tbody {
      border-color: #EEEEEE;
  }
  .table .thead-dark th {
      color: inherit;
      border-color: #EEEEEE;
  }
}

.c-pointer {
  cursor: pointer;
}

* {
  outline: none;
  padding: 0;
}

*::after {
  margin: 0;
  padding: 0;
}

*::before {
  margin: 0;
  padding: 0;
}

::selection {
  color: #fff;
  background: #43c4d3;
}

@media only screen and (max-width: 1400px) {
  body {
      font-size: 0.875rem;
  }
}

.flex-wrap {
  flex-wrap: wrap
}

p {
  line-height: 1.5;
  font-size: 16px !important;
  color: #a2a2a2;
  margin-bottom: 15px !important;
}

.box-shadow-none {
  box-shadow: none !important;
}

#main-wrapper {
  opacity: 1;
  transition: all 0.25s ease-in;
  overflow: hidden;
  position: relative;
}

#main-wrapper.show {
  opacity: 1;
}

.rounded-lg {
  border-radius: 0.75rem;
}

ul {
  padding: 0;
  margin-bottom: 15px!important;
}

li {
  list-style: circle;
margin-left: 20px !important;}

a {
  color: #b7b7b7;
}

a:hover,
a:focus,
a.active {
  text-decoration: none;
}

.btn-link:hover,
.btn-link:focus,
.btn-link.active {
  text-decoration: none;
}

.wspace-no {
  white-space: nowrap;
}

.content-body .container {
  margin-top: 70px;
}

.content-body .container-fluid,
.content-body .container-sm,
.content-body .container-md,
.content-body .container-lg,
.content-body .container-xl {
  padding-top: 50px;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 50px;
}

@media only screen and (max-width: 1400px) {}

@media only screen and (max-width: 767px) {}

@media only screen and (max-width: 575px) {
  .content-body .container-fluid,
  .content-body .container-sm,
  .content-body .container-md,
  .content-body .container-lg,
  .content-body .container-xl {
      padding-top: 15px;
      padding-right: 15px;
      padding-left: 15px;
  }
}


/* sp */

.row.sp80,
.sp80 {
  margin-left: -40px;
  margin-right: -40px;
}

.row.sp80 [class*="col-"],
.sp80 [class*="col-"] {
  padding-left: 40px;
  padding-right: 40px;
}

.row.sp60,
.sp60 {
  margin-left: -30px;
  margin-right: -30px;
}

.row.sp60 [class*="col-"],
.sp60 [class*="col-"] {
  padding-left: 30px;
  padding-right: 30px;
}

.row.sp40,
.sp40 {
  margin-left: -20px;
  margin-right: -20px;
}

.row.sp40 [class*="col-"],
.sp40 [class*="col-"] {
  padding-left: 20px;
  padding-right: 20px;
}

.row.sp20,
.sp20 {
  margin-left: -9px;
  margin-right: -9px;
}

.row.sp20 [class*="col-"],
.sp20 [class*="col-"] {
  padding-left: 9px;
  padding-right: 9px;
}

.row.sp15,
.sp15 {
  margin-left: -7.5px;
  margin-right: -7.5px;
}

.row.sp15 [class*="col-"],
.sp15 [class*="col-"] {
  padding-left: 7.5px;
  padding-right: 7.5px;
}

.row.sp10,
.sp10 {
  margin-left: -5px;
  margin-right: -5px;
}

.row.sp10 [class*="col-"],
.sp10 [class*="col-"] {
  padding-left: 5px;
  padding-right: 5px;
}

.row.sp4,
.sp4 {
  margin-left: -2px;
  margin-right: -2px;
}

.row.sp4 [class*="col-"],
.sp4 [class*="col-"] {
  padding-left: 2px;
  padding-right: 2px;
}

.row.spno,
.spno {
  margin-left: 0;
  margin-right: 0;
}

.row.spno [class*="col-"],
.spno [class*="col-"] {
  padding-left: 0;
  padding-right: 0;
}

.content-heading {
  font-size: 16px;
  margin-bottom: 1.875rem;
  margin-top: 3.125rem;
  border-bottom: 1px solid #d7dae3;
  padding-bottom: 10px;
}

[direction="rtl"] .content-heading {
  text-align: right;
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus {
  box-shadow: none;
}

.text-ov {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
}

.support-ticket {
  position: fixed;
  bottom: 30px;
  right: 15px;
  z-index: 999999;
}

.support-ticket-btn {
  width: 100px;
  background: #7CB442;
  animation: 0.7s ease-in-out 0s infinite alternate none running crescendo;
  border-radius: 50px;
  color: #fff;
  font-size: 8px;
  font-size: 16px;
  padding: 5px 10px 7px;
  text-align: center;
  display: inline-block;
  box-shadow: rgba(124, 180, 66, 0.7) 0px 8px 35px 0px;
}

.support-ticket-btn:hover,
.support-ticket-btn:focus {
  color: #fff;
}

.text-blue {
  color: #5e72e4;
}

.text-indigo {
  color: #6610f2;
}

.text-purple {
  color: #7d49eb;
}

.text-pink {
  color: #e83e8c;
}

.text-red {
  color: #EE3232;
}

.text-orange {
  color: #ff9900;
}

.text-yellow {
  color: #FFFA6F;
}

.text-green {
  color: #297F00;
}

.text-teal {
  color: #20c997;
}

.text-cyan {
  color: #3065D0;
}

.bg-gray-dark {
  background: #143b64 !important;
}

.bg-purpal {
  background: #4527a0 !important;
}

.bg-red {
  background: #c62828 !important;
}

.bg-blue-dark {
  background: #283593 !important;
}

.bg-blue {
  background: #7356f1 !important;
}

.bg-blue-light {
  background: #3695eb !important;
}

.bg-green-light {
  background: #00838f !important;
}

.bg-green {
  background: #ff8f16 !important;
}

.bg-black {
  background: #000;
}

.text-black {
  color: #000 !important;
}

.dz-scroll {
  position: relative;
}

.fs-6 {
  font-size: 6px !important;
  line-height: 1.5;
}

.fs-8 {
  font-size: 8px !important;
  line-height: 1.5;
  margin: 0;
}

.fs-10 {
  font-size: 10px !important;
  line-height: 1.5;
  margin: 0;
}

.fs-12 {
  font-size: 12px !important;
  line-height: 1.5;
}

.fs-13 {
  font-size: 13px !important;
  line-height: 1.5;
}

.fs-14 {
  font-size: 14px !important;
  line-height: 1.5;
}

.fs-15 {
  font-size: 14px !important;
  line-height: 1.5;
}

.fs-16 {
  font-size: 16px !important;
  line-height: 1.5;
}

.fs-18 {
  font-size: 18px !important;
  line-height: 1.5;
}

.fs-20 {
  font-size: 20px !important;
  line-height: 1.5;
}

.fs-22 {
  font-size: 22px !important;
  line-height: 1.5;
}

.fs-24 {
  font-size: 24px !important;
  line-height: 1.4;
}

.fs-26 {
  font-size: 26px !important;
  line-height: 1.4;
}

.fs-28 {
  font-size: 28px !important;
  line-height: 1.4;
}

.fs-32 {
  font-size: 32px !important;
  line-height: 1.25;
}

.fs-34 {
  font-size: 34px !important;
  line-height: 1.25;
}

.fs-35 {
  font-size: 35px !important;
  line-height: 1.25;
}

.fs-40 {
  font-size: 40px !important;
  line-height: 1.25;
}

.font-w100 {
  font-weight: 100;
}

.font-w200 {
  font-weight: 200;
}

.font-w300 {
  font-weight: 300;
}

.font-w400 {
  font-weight: 400;
}

.font-w500 {
  font-weight: 500;
}

.font-w600 {
  font-weight: 600;
}

.font-w700 {
  font-weight: 700 !important;
}

.font-w800 {
  font-weight: 800;
}

.font-w900 {
  font-weight: 900;
}

.scale1 {
  transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  display: inline-block;
}

.scale2 {
  transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  display: inline-block;
}

.scale3 {
  transform: scale(1.3);
  -moz-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  display: inline-block;
}

.scale4 {
  transform: scale(1.4);
  -moz-transform: scale(1.4);
  -webkit-transform: scale(1.4);
  -ms-transform: scale(1.4);
  -o-transform: scale(1.4);
  display: inline-block;
}

.scale5 {
  transform: scale(1.5);
  -moz-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  display: inline-block;
}

.scale1 {
  transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  display: inline-block;
}

.scale2 {
  transform: scale(1.2);
  -moz-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  -o-transform: scale(1.2);
  display: inline-block;
}

.scale3 {
  transform: scale(1.3);
  -moz-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  display: inline-block;
}

.scale4 {
  transform: scale(1.4);
  -moz-transform: scale(1.4);
  -webkit-transform: scale(1.4);
  -ms-transform: scale(1.4);
  -o-transform: scale(1.4);
  display: inline-block;
}

.scale5 {
  transform: scale(1.5);
  -moz-transform: scale(1.5);
  -webkit-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  display: inline-block;
}

@-webkit-keyframes crescendo {
  from {
      -webkit-transform: translateY(5px) scale(0.8);
      -ms-transform: translateY(5px) scale(0.8);
      transform: translateY(5px) scale(0.8);
  }
  to {
      -webkit-transform: translateY(0px) scale(1);
      -ms-transform: translateY(0px) scale(1);
      transform: translateY(0px) scale(1);
  }
}

@keyframes gXGDoR {
  from {
      -webkit-transform: translateY(5px) scale(0.8);
      -ms-transform: translateY(5px) scale(0.8);
      transform: translateY(5px) scale(0.8);
  }
  to {
      -webkit-transform: translateY(0px) scale(1);
      -ms-transform: translateY(0px) scale(1);
      transform: translateY(0px) scale(1);
  }
}

@keyframes crescendo {
  from {
      -webkit-transform: translateY(5px) scale(0.8);
      -ms-transform: translateY(5px) scale(0.8);
      transform: translateY(5px) scale(0.8);
  }
  to {
      -webkit-transform: translateY(0px) scale(1);
      -ms-transform: translateY(0px) scale(1);
      transform: translateY(0px) scale(1);
  }
}

@keyframes gXGDoR {
  from {
      -webkit-transform: translateY(5px) scale(0.8);
      -ms-transform: translateY(5px) scale(0.8);
      transform: translateY(5px) scale(0.8);
  }
  to {
      -webkit-transform: translateY(0px) scale(1);
      -ms-transform: translateY(0px) scale(1);
      transform: translateY(0px) scale(1);
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  .col-xxl-1 {
      flex: 0 0 8.3333333333%;
      max-width: 8.3333333333%;
  }
  .col-xxl-2 {
      flex: 0 0 16.6666666667%;
      max-width: 16.6666666667%;
  }
  .col-xxl-3 {
      flex: 0 0 25%;
      max-width: 25%;
  }
  .col-xxl-4 {
      flex: 0 0 33.3333333333%;
      max-width: 33.3333333333%;
  }
  .col-xxl-5 {
      flex: 0 0 41.6666666667%;
      max-width: 41.6666666667%;
  }
  .col-xxl-6 {
      flex: 0 0 50%;
      max-width: 50%;
  }
  .col-xxl-7 {
      flex: 0 0 58.3333333333%;
      max-width: 58.3333333333%;
  }
  .col-xxl-8 {
      flex: 0 0 66.6666666667%;
      max-width: 66.6666666667%;
  }
  .col-xxl-9 {
      flex: 0 0 75%;
      max-width: 75%;
  }
  .col-xxl-10 {
      flex: 0 0 83.3333333333%;
      max-width: 83.3333333333%;
  }
  .col-xxl-11 {
      flex: 0 0 91.6666666667%;
      max-width: 91.6666666667%;
  }
  .col-xxl-12 {
      flex: 0 0 100%;
      max-width: 100%;
  }
  .mb-xxl-4 {
      margin-bottom: 1.5rem !important;
  }
}


/* Editable */

.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: black;
  transition: all 2s linear;
}

.preloaderr {
  background-color: white;
  transition: all 0.1s linear;
}

.sk-three-bounce {
  margin: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: white;
}

.sk-three-bounce .sk-child {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-color: #43c4d3;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
}

.sk-three-bounce .sk-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.sk-three-bounce .sk-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-three-bounce {
  0%,
  80%,
  100% {
      -webkit-transform: scale(0);
      transform: scale(0);
  }
  40% {
      -webkit-transform: scale(1);
      transform: scale(1);
  }
}

@keyframes sk-three-bounce {
  0%,
  80%,
  100% {
      -webkit-transform: scale(0);
      transform: scale(0);
  }
  40% {
      -webkit-transform: scale(1);
      transform: scale(1);
  }
}

.footer {
  padding-left: 17.1875rem;
  background-color: #F6FBF8;
}

.footer .copyright {
  padding: 0.9375rem;
}

.footer .copyright p {
  text-align: center;
  margin: 0;
}

.footer .copyright a {
  color: #ff00cb;
}

[data-sidebar-style="mini"] .nav-control,
[data-layout="horizontal"] .nav-control {
  display: none;
}

@media only screen and (max-width: 767px) {
  [data-sidebar-style="overlay"] .nav-header .logo-abbr {
      display: block;
  }
}

@media only screen and (max-width: 991px) {
  [data-sidebar-style="overlay"] .nav-control {
      right: -4rem;
  }
  [data-sidebar-style="overlay"] .header .header-content {
      padding-left: 5rem;
  }
}

@media only screen and (max-width: 575px) {
  [data-sidebar-style="overlay"] .nav-control {
      right: -3.5rem;
  }
  [data-sidebar-style="overlay"] .header .header-content {
      padding-left: 3rem;
  }
}

[data-header-position="fixed"] .nav-header {
  position: fixed;
  left: auto;
}

.nav-header {
  height: 7.5rem;
  width: 13.563rem;
  display: inline-block;
  text-align: left;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  transition: all .2s ease;
  z-index: 5;
}

.nav-header .logo-abbr {
  max-width: 100%;
}

@media only screen and (max-width: 575px) {
  .nav-header .logo-abbr {
      max-width: 35px;
  }
}

.nav-header .logo-compact {
  display: none;
}

.nav-header .brand-logo {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.125rem;
  color: #fff;
  text-decoration: none;
  padding-left: 30px;
  padding-right: 50px;
  font-weight: 700;
}

[data-sidebar-style="compact"] .nav-header .brand-logo,
[data-sidebar-style="mini"] .nav-header .brand-logo {
  padding-left: 0;
  padding-right: 0;
  justify-content: center;
}

.nav-header .brand-title {
  margin-left: 5px;
  max-width: 120px;
  margin-top: 5px;
}

.nav-header .brand-title {
  background-position: 0 120%;
}

@media only screen and (max-width: 1199px) {
  .nav-header {
      width: 217px;
      height: 5rem;
  }
  .nav-header .brand-title {
      display: none;
  }
}

.nav-control {
  cursor: pointer;
  position: absolute;
  right: -5.0625rem;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999;
  font-size: 1.4rem;
  padding: 2px 0.5rem 0;
  border-radius: 2px;
}

@media only screen and (max-width: 767px) {
  .nav-control {
      right: -2.5rem;
  }
}

.hamburger {
  display: inline-block;
  left: 0px;
  position: relative;
  top: 3px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  width: 26px;
  z-index: 999;
}

.hamburger .line {
  background: #43c4d3;
  display: block;
  height: 3px;
  border-radius: 3px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger .line:nth-child(1) {
  width: 20px;
}

.hamburger .line:nth-child(2) {
  width: 26px;
}

.hamburger .line:nth-child(3) {
  width: 22px;
}

.hamburger:hover {
  cursor: pointer;
}

.hamburger:hover .line {
  width: 26px;
}


/*
.hamburger.is-active {
left: 60px;
}
*/

.hamburger.is-active .line:nth-child(1),
.hamburger.is-active .line:nth-child(3) {
  width: 10px;
  height: 2px;
}

.hamburger.is-active .line:nth-child(2) {
  -webkit-transform: translateX(0px);
  transform: translateX(0px);
  width: 22px;
  height: 2px;
}

.hamburger.is-active .line:nth-child(1) {
  -webkit-transform: translateY(4px) rotate(45deg);
  transform: translateY(4px) rotate(45deg);
}

.hamburger.is-active .line:nth-child(3) {
  -webkit-transform: translateY(-4px) rotate(-45deg);
  transform: translateY(-4px) rotate(-45deg);
}

@media (min-width: 767px) {
  [data-sidebar-style="compact"] .nav-control {
      display: none;
  }
  [data-sidebar-style="compact"] .nav-header {
      width: 9.375rem;
  }
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .brand-title {
  display: none;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .nav-header .logo-abbr {
  display: block;
}

[data-sidebar-style="full"][data-layout="horizontal"] .logo-compact {
  display: none;
}

[data-sidebar-style="mini"] .nav-header .logo-abbr {
  display: block;
}

[data-sidebar-style="compact"][data-layout="vertical"] .nav-header .brand-title {
  display: none;
}

[data-sidebar-style="compact"][data-layout="vertical"] .nav-header .logo-compact {
  max-width: 75px;
}

[data-sidebar-style="compact"][data-layout="horizontal"] .nav-header .brand-logo {
  padding-left: 30px;
  padding-right: 30px;
  justify-content: start;
}

[data-sidebar-style="modern"][data-layout="vertical"] .nav-header {
  width: 9.375rem;
}

[data-sidebar-style="modern"][data-layout="vertical"] .nav-header .brand-title {
  display: none;
}

[data-sidebar-style="modern"][data-layout="vertical"] .nav-header .logo-compact {
  display: none;
}

.header {
  height: 70px;
  z-index: 1;
  position: relative;
  padding: 0rem;
  background-color: #fff;
  z-index: 3;
  padding-left: 14rem;
  transition: all .2s ease;
}

.header .header-content {
  height: 100%;
  padding-left: 25px;
  padding-right: 25px;
  align-items: center;
  
}

@media only screen and (max-width: 767px) {
  .header .header-content {
      padding-left: 3.75rem;
      padding-right: 0.938rem;
  width: 100%;margin-top: 0px;}
}

.header .navbar {
  padding: 0;
  height: 100%;
  width: 100%;
}

.header .navbar .navbar-collapse {
  height: 100%;
  width: 100%;
}

@media only screen and (max-width: 1199px) {
  .header {
      height: 70px;
  padding-left: 19px;align-content: center;padding-top: 0;}
}


/* pulse in SVG */

svg.pulse-svg {
  overflow: visible;
}

svg.pulse-svg .first-circle,
svg.pulse-svg .second-circle,
svg.pulse-svg .third-circle {
  -webkit-transform: scale(0.3);
  transform: scale(0.3);
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation: pulse-me 3s linear infinite;
  animation: pulse-me 3s linear infinite;
  fill: #43c4d3;
}

svg.pulse-svg .second-circle {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

svg.pulse-svg .third-circle {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}


/* pulse in CSS */

.pulse-css {
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  border-radius: 3.5rem;
  height: 1rem;
  position: absolute;
  background: #FAFF00;
  right: -5px;
  top: -5px;
  width: 1rem;
}

.pulse-css:after,
.pulse-css:before {
  content: '';
  width: 1rem;
  height: 1rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: -.2rem;
  background-color: #FAFF00;
  margin: auto;
  -webkit-transform: scale(0.3);
  transform: scale(0.3);
  -webkit-transform-origin: center center;
  transform-origin: center center;
  -webkit-animation: pulse-me 3s linear infinite;
  animation: pulse-me 3s linear infinite;
}

[direction="rtl"] .pulse-css:after,
[direction="rtl"] .pulse-css:before {
  left: auto;
  right: -.2rem;
}

@-webkit-keyframes pulse-me {
  0% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0;
  }
  50% {
      opacity: 0.1;
  }
  70% {
      opacity: 0.09;
  }
  100% {
      -webkit-transform: scale(3);
      transform: scale(3);
      opacity: 0;
  }
}

@keyframes pulse-me {
  0% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
      opacity: 0;
  }
  50% {
      opacity: 0.1;
  }
  70% {
      opacity: 0.09;
  }
  100% {
      -webkit-transform: scale(3);
      transform: scale(3);
      opacity: 0;
  }
}

[data-sidebar-style="full"] .header,
[data-sidebar-style="overlay"] .header {
  width: 100%;
}

@media only screen and (min-width: 1200px) and (max-width: 1350px) {}

@media only screen and (max-width: 1199px) {}

[data-sidebar-style="mini"] .header {
  width: 100%;
  padding-left: 7.5rem;
}

[data-sidebar-style="compact"] .header {
  width: 100%;
  padding-left: 9.375rem;
}

[data-sidebar-style="compact"] .header .header-content {
  padding-left: 1.875rem;
}

[data-header-position="fixed"] .header {
  position: fixed;
  top: 0;
  width: 100%;
}

[data-header-position="fixed"] .content-body {
  padding-top: 0px;
  padding-bottom: 50px;
  margin-top: 10px;
}

[data-header-position="fixed"] .deznav {
  margin-top: 0;
}

[data-sidebar-style="compact"][data-header-position="fixed"][data-container="boxed"][data-layout="vertical"] .header {
  width: 1199px;
}

[data-sidebar-style="modern"] .header {
  width: 100%;
  padding-left: 9.375rem;
}

[data-sidebar-style="modern"][data-layout="horizontal"] .nav-header .brand-logo {
  justify-content: start;
}

[data-sidebar-style="modern"][data-layout="horizontal"] .header .header-content {
  padding-left: 30px;
}

.header-left {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-left .dashboard_bar {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}

@media only screen and (max-width: 1199px) {
  .header-left .dashboard_bar {
      font-size: 24px;
  }
}

@media only screen and (max-width: 767px) {
  .header-left .dashboard_bar {
      font-size: 20px;
  }
}

@media only screen and (max-width: 790px) {
  .header-left .dashboard_bar {
      display: none;
  }
}

.header-left input {
  background: #F6FBF8 !important;
  min-width: 170px;
  min-height: 40px;
  border-color: transparent;
  color: #3e4954 !important;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
  box-shadow: none;
}

[direction="rtl"] .header-left input {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.header-left input:focus,
.header-left input:active,
.header-left input.active {
  border-color: transparent;
  box-shadow: none;
}

.header-left input::-webkit-input-placeholder {
  /* Edge */
  color: #3e4954;
}

.header-left input:-ms-input-placeholder {
  /* Internet Explorer */
  color: #3e4954;
}

.header-left input::placeholder {
  color: #3e4954;
}

.header-left .search_bar {
  display: flex;
  align-items: center;
  height: 100%;
}

.header-left .search_bar .dropdown-menu {
  box-shadow: none;
}

.header-left .search_bar .search_icon {
  background: #F6FBF8 !important;
  height: 40px;
  padding: 8px 0 8px 15px !important;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.header-left .search_bar .search_icon i {
  font-size: 24px;
  color: #3e4954;
  line-height: 1;
}

@media only screen and (max-width: 767px) {
  .header-left .search_bar .search_icon {
      border-radius: 4px;
      padding: 8px 10px !important;
  }
}

@media only screen and (max-width: 767px) {
  .header-left .search_bar {
      position: static;
  }
  .header-left .search_bar .dropdown-menu {
      width: 300px;
      left: -15vw;
      box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.1);
      border-radius: 4px !important;
  }
}

@media only screen and (max-width: 767px) and (max-width: 575px) {
  .header-left .search_bar .dropdown-menu {
      width: 250px;
      left: -25vw;
  }
}

@media only screen and (max-width: 767px) {
  .header-left .search_bar .dropdown-menu .form-control {
      border-radius: 4px !important;
      width: 100%;
  }
  [direction="rtl"] .header-left .search_bar .dropdown-menu {
      right: -98px;
  }
}

.header-left .search_bar .dropdown-menu,
.header-left .search_bar .dropdown-menu.show {
  border: 0px;
  background-color: transparent;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
}

@media only screen and (min-width: 768px) {
  .header-left .search_bar .dropdown-menu,
  .header-left .search_bar .dropdown-menu.show {
      left: 34px;
      top: 0;
      transform: translateY(50%);
      display: block;
  }
}

[data-sidebar-style="compact"] .header-left {
  margin-left: 0;
}

.header-right {
  height: 100%;
}

.header-right .nav-item {
  height: 100%;
  display: flex;
  align-items: center;
}

.header-right .nav-item .nav-link {
  color: #464a53;
  font-size: 18px;
}

.header-right .right-sidebar {
  margin-right: -30px;
}

.header-right .right-sidebar a {
  height: 80px;
  width: 80px;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  border-left: 1px solid #D1D1D1;
}

.header-right>li:not(:first-child) {
  padding-left: 1.5rem;
}

@media only screen and (max-width: 767px) {
  .header-right>li:not(:first-child) {
      padding-left: 0.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .header-right .notification_dropdown {
      position: static;
  }
}

.header-right .notification_dropdown .nav-link {
  position: relative;
  color: #3e4954;
  background: transparent;
  border: 1px solid rgba(62, 73, 84, 0.1);
  border-radius: 0.75rem;
  height: 55px;
  width: 55px;
  text-align: center;
  line-height: 2;
}

@media only screen and (max-width: 1400px) {
  .header-right .notification_dropdown .nav-link {
      padding: 10px;
      height: 40px;
      width: 40px;
      line-height: 1;
  }
}

.header-right .notification_dropdown .nav-link i {
  font-size: 24px;
}

@media only screen and (max-width: 1400px) {
  .header-right .notification_dropdown .nav-link i {
      font-size: 18px;
  }
}

@media only screen and (max-width: 1400px) {
  .header-right .notification_dropdown .nav-link svg {
      width: 18px;
      height: 18px;
  }
}

.header-right .notification_dropdown .nav-link .badge {
  position: absolute;
  font-size: 14px;
  border-radius: 50%;
  right: -10px;
  top: -10px;
  padding: 0px;
  font-weight: normal;
  text-align: center;
  line-height: 25px;
  height: 25px;
  width: 25px;
}

@media only screen and (max-width: 1400px) {
  .header-right .notification_dropdown .nav-link .badge {
      line-height: 18px;
      height: 20px;
      width: 20px;
      font-size: 12px;
  }
}

.header-right .notification_dropdown .dropdown-item:focus a,
.header-right .notification_dropdown .dropdown-item:active a {
  color: #fff;
}

.header-right .notification_dropdown .dropdown-item a {
  color: #3e4954;
}

.header-right .notification_dropdown .dropdown-item a:hover {
  text-decoration: none;
}

.header-right .dropdown-menu {
  border-width: 0;
  box-shadow: 0 0 37px rgba(8, 21, 66, 0.05);
}

.header-right .header-profile>a.nav-link {
  padding: 0;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(19, 180, 151, 0.05);
  border-radius: 0.75rem;
  display: flex;
  white-space: nowrap;
  align-items: center;
}

.header-right .header-profile>a.nav-link i {
  font-weight: 700;
}

.header-right .header-profile>a.nav-link .header-info {
  padding-right: 20px;
  text-align: right;
  padding-left: 20px;
}

@media only screen and (max-width: 1400px) {
  .header-right .header-profile>a.nav-link .header-info {
      padding-right: 10px;
      padding-left: 10px;
  }
}

@media only screen and (max-width: 767px) {
  .header-right .header-profile>a.nav-link .header-info {
      display: none;
  }
}

.header-right .header-profile>a.nav-link .header-info span {
  font-size: 16px;
  color: #fff;
  display: block;
  font-weight: 300;
}

@media only screen and (max-width: 1400px) {
  .header-right .header-profile>a.nav-link .header-info span {
      font-size: 14px;
  }
}

.header-right .header-profile>a.nav-link .header-info strong {
  font-weight: 600;
}

.header-right .header-profile .dropdown-menu {
  padding: 15px 0;
  min-width: 12.5rem;
}

.header-right .header-profile img {
  width: 56px;
  height: 56px;
  border-radius: 0.75rem;
}

@media only screen and (max-width: 1400px) {
  .header-right .header-profile img {
      width: 40px;
      height: 40px;
  }
}

.header-right .header-profile .dropdown-toggle i {
  font-size: 1.25rem;
}

@media only screen and (max-width: 575px) {
  .header-right .header-profile .dropdown-toggle span {
      display: none;
  }
}

.header-right .header-profile .profile_title {
  background: #43c4d3;
  color: #fff;
  padding: 10px 20px;
}

.header-right .header-profile .profile_title h5 {
  color: #fff;
  margin-bottom: 3px;
}

.header-right .header-profile .dropdown-item {
  padding: 8px 24px;
}

.dz-fullscreen #icon-minimize {
  display: none;
}

.dz-fullscreen.active #icon-full {
  display: none;
}

.dz-fullscreen.active #icon-minimize {
  display: inline-block;
}

.notification_dropdown .dropdown-menu-right {
  min-width: 310px;
  padding: 0rem 0 1rem;
  top: 100%;
}

.notification_dropdown .dropdown-menu-right .notification_title {
  background: #43c4d3;
  color: #fff;
  padding: 10px 20px;
}

.notification_dropdown .dropdown-menu-right .notification_title h5 {
  color: #fff;
  margin-bottom: 3px;
}

.notification_dropdown .dropdown-menu-right .media {
  width: 45px !important;
  height: 45px !important;
  font-size: 18px !important;
}

.notification_dropdown .dropdown-menu-right .media {
  border-color: #3e454d;
}

.notification_dropdown .dropdown-menu-right .media>span {
  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: inline-block;
  padding: 7px 9px;
  margin-right: 10px;
}

[direction="rtl"].notification_dropdown .dropdown-menu-right .media>span {
  margin-right: 0;
  margin-left: 10px;
}

.notification_dropdown .dropdown-menu-right .media>span.success {
  background: #e7faec;
  color: #2bc155;
}

.notification_dropdown .dropdown-menu-right .media>span.primary {
  background: #b5f7eb;
  color: #43c4d3;
}

.notification_dropdown .dropdown-menu-right .media>span.danger {
  background: #e19e9e;
  color: #B03636;
}

.notification_dropdown .dropdown-menu-right .media .notify-time {
  width: 100% !important;
  margin-right: 0 !important;
  color: #828690;
}

.notification_dropdown .dropdown-menu-right .media p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 200px;
  margin-bottom: 0;
  margin-top: 5px;
}

@media only screen and (max-width: 575px) {
  .notification_dropdown .dropdown-menu-right .media p {
      max-width: 100px;
  }
}

.notification_dropdown .dropdown-menu-right .all-notification {
  display: block;
  padding: 15px 30px 0;
  text-align: center;
  border-top: 1px solid #D1D1D1;
}

.notification_dropdown .dropdown-menu-right .all-notification i {
  margin-left: 10px;
}


.nav-label {
  margin: 10px 30px 0;
  padding: 1.5625rem 0 10px;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
  border-top: 1px solid #eaeaea;
  color: #999999;
}

.nav-label {
  border-color: #3e454d;
}

.nav-label.first {
  border: 0px;
  margin-top: 0px;
}

.nav-badge {
  position: absolute;
  right: 2.8125rem;
  top: 0.625rem;
}

.content-body {
  margin-left: 13.563rem;
  z-index: 0;
  transition: all .2s ease;
}

@media only screen and (max-width: 1400px) {
  .content-body {
      margin-left: 14rem;
  }
}

.bell img {
  -webkit-animation: ring 8s .7s ease-in-out infinite;
  -webkit-transform-origin: 50% 4px;
  -moz-animation: ring 8s .7s ease-in-out infinite;
  -moz-transform-origin: 50% 4px;
  animation: ring 8s .7s ease-in-out infinite;
}

@-webkit-keyframes ring {
  0% {
      -webkit-transform: rotateZ(0);
  }
  1% {
      -webkit-transform: rotateZ(30deg);
  }
  3% {
      -webkit-transform: rotateZ(-28deg);
  }
  5% {
      -webkit-transform: rotateZ(34deg);
  }
  7% {
      -webkit-transform: rotateZ(-32deg);
  }
  9% {
      -webkit-transform: rotateZ(30deg);
  }
  11% {
      -webkit-transform: rotateZ(-28deg);
  }
  13% {
      -webkit-transform: rotateZ(26deg);
  }
  15% {
      -webkit-transform: rotateZ(-24deg);
  }
  17% {
      -webkit-transform: rotateZ(22deg);
  }
  19% {
      -webkit-transform: rotateZ(-20deg);
  }
  21% {
      -webkit-transform: rotateZ(18deg);
  }
  23% {
      -webkit-transform: rotateZ(-16deg);
  }
  25% {
      -webkit-transform: rotateZ(14deg);
  }
  27% {
      -webkit-transform: rotateZ(-12deg);
  }
  29% {
      -webkit-transform: rotateZ(10deg);
  }
  31% {
      -webkit-transform: rotateZ(-8deg);
  }
  33% {
      -webkit-transform: rotateZ(6deg);
  }
  35% {
      -webkit-transform: rotateZ(-4deg);
  }
  37% {
      -webkit-transform: rotateZ(2deg);
  }
  39% {
      -webkit-transform: rotateZ(-1deg);
  }
  41% {
      -webkit-transform: rotateZ(1deg);
  }
  43% {
      -webkit-transform: rotateZ(0);
  }
  100% {
      -webkit-transform: rotateZ(0);
  }
}

@-moz-keyframes ring {
  0% {
      -moz-transform: rotate(0);
  }
  1% {
      -moz-transform: rotate(30deg);
  }
  3% {
      -moz-transform: rotate(-28deg);
  }
  5% {
      -moz-transform: rotate(34deg);
  }
  7% {
      -moz-transform: rotate(-32deg);
  }
  9% {
      -moz-transform: rotate(30deg);
  }
  11% {
      -moz-transform: rotate(-28deg);
  }
  13% {
      -moz-transform: rotate(26deg);
  }
  15% {
      -moz-transform: rotate(-24deg);
  }
  17% {
      -moz-transform: rotate(22deg);
  }
  19% {
      -moz-transform: rotate(-20deg);
  }
  21% {
      -moz-transform: rotate(18deg);
  }
  23% {
      -moz-transform: rotate(-16deg);
  }
  25% {
      -moz-transform: rotate(14deg);
  }
  27% {
      -moz-transform: rotate(-12deg);
  }
  29% {
      -moz-transform: rotate(10deg);
  }
  31% {
      -moz-transform: rotate(-8deg);
  }
  33% {
      -moz-transform: rotate(6deg);
  }
  35% {
      -moz-transform: rotate(-4deg);
  }
  37% {
      -moz-transform: rotate(2deg);
  }
  39% {
      -moz-transform: rotate(-1deg);
  }
  41% {
      -moz-transform: rotate(1deg);
  }
  43% {
      -moz-transform: rotate(0);
  }
  100% {
      -moz-transform: rotate(0);
  }
}

@keyframes ring {
  0% {
      transform: rotate(0);
  }
  1% {
      transform: rotate(30deg);
  }
  3% {
      transform: rotate(-28deg);
  }
  5% {
      transform: rotate(34deg);
  }
  7% {
      transform: rotate(-32deg);
  }
  9% {
      transform: rotate(30deg);
  }
  11% {
      transform: rotate(-28deg);
  }
  13% {
      transform: rotate(26deg);
  }
  15% {
      transform: rotate(-24deg);
  }
  17% {
      transform: rotate(22deg);
  }
  19% {
      transform: rotate(-20deg);
  }
  21% {
      transform: rotate(18deg);
  }
  23% {
      transform: rotate(-16deg);
  }
  25% {
      transform: rotate(14deg);
  }
  27% {
      transform: rotate(-12deg);
  }
  29% {
      transform: rotate(10deg);
  }
  31% {
      transform: rotate(-8deg);
  }
  33% {
      transform: rotate(6deg);
  }
  35% {
      transform: rotate(-4deg);
  }
  37% {
      transform: rotate(2deg);
  }
  39% {
      transform: rotate(-1deg);
  }
  41% {
      transform: rotate(1deg);
  }
  43% {
      transform: rotate(0);
  }
  100% {
      transform: rotate(0);
  }
}

.deznav {
  width: 13.563rem;
  padding-bottom: 0;
  height: calc(100% - 120px);
  position: absolute;
  top: 7.5rem;
  padding-top: 0;
  z-index: 5;
  background-color: #fff;
  transition: all .2s ease;
}

@media only screen and (max-width: 1199px) {
  .deznav {
      background-color: #fff;
      top: 5rem;
      height: calc(100% - 80px);
  }
}

.deznav .deznav-scroll {
  position: relative;
  height: 100%;
}

.deznav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.deznav .metismenu {
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-right: 0px;
}

.deznav .metismenu.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
}

.deznav .metismenu>li {
  display: flex;
  flex-direction: column;
}

.deznav .metismenu>li a>i {
  font-size: 0.8rem;
  display: inline-block;
  vertical-align: middle;
  padding: 0 0.875rem 0 0;
  position: relative;
  top: 0;
  color: #fff!important;
  line-height: 1;
}

[data-sidebar-style="compact"] .deznav .metismenu>li a>i {
  display: block;
  padding: 0;
}

@media only screen and (max-width: 767px) {
  .deznav .metismenu>li a>i {
      font-size: 1.25rem;
      padding: 0 .75rem 0 0;
  }
}

.deznav .metismenu>li>a {
  font-weight: 400;
  display: inline-block;
  font-size: 15px;
}

.deznav .metismenu>li>a svg {
  max-width: 24px;
  max-height: 24px;
  height: 100%;
  margin-right: 5px;
  margin-top: -3px;
  color: #43c4d3;
}

.deznav .metismenu>li>a g [fill] {
  fill: #8088a1;
  color: #fff !important
}

.deznav .metismenu>li:hover>a,
.deznav .metismenu>li:focus>a {
  color: #43c4d3;
  color: #fff !important
}

.deznav .metismenu>li:hover>a g [fill],
.deznav .metismenu>li:focus>a g [fill] {
  fill: #43c4d3;
  color: #fff !important
}

.deznav .metismenu>li.mm-active>a {
  color: #43c4d3;
}

.deznav .metismenu>li.mm-active>a g [fill] {
  fill: #43c4d3;
}

.deznav .metismenu li {
  position: relative;
}

.deznav .metismenu ul {
  transition: all .2s ease-in-out;
  position: relative;
  z-index: 1;
  padding: 0.5rem 0;
}

.deznav .metismenu ul a {
  padding-top: .5rem;
  padding-bottom: .5rem;
  position: relative;
  font-size: 15px;
  padding-left: 5.75rem;
}

@media only screen and (max-width: 767px) {
  .deznav .metismenu ul a {
      padding-left: 3.5rem;
      font-size: 14px;
  }
}

.deznav .metismenu ul a:hover,
.deznav .metismenu ul a:focus,
.deznav .metismenu ul a.mm-active {
  text-decoration: none;
  color: #43c4d3;
}

.deznav .metismenu a {
  position: relative;
  display: block;
  padding: 0.625rem 1.875rem;
  outline-width: 0;
  color: #b7b7b7;
  text-decoration: none;
}

@media only screen and (max-width: 767px) {
  .deznav .metismenu a {
      padding: 0.625rem 1.25rem;
  }
}

.deznav .metismenu .has-arrow:after {
  width: .5rem;
  height: .5rem;
  right: 1.875rem;
  top: 48%;
  border-color: inherit;
  -webkit-transform: rotate(-225deg) translateY(-50%);
  transform: rotate(-225deg) translateY(-50%);
}

.deznav .metismenu .has-arrow[aria-expanded=true]:after,
.deznav .metismenu .mm-active>.has-arrow:after {
  -webkit-transform: rotate(-135deg) translateY(-50%);
  transform: rotate(-135deg) translateY(-50%);
}

@media only screen and (max-width: 1199px) {
  .nav-header {
      width: 217px;
  }
}

@media (max-width: 767px) {
  .brand-title {
      display: none;
  }
  .footer {
      padding-left: 0;
  }
  .deznav {
      left: 0;
      top: 5rem;
  }
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu>ul.collapse:not(.in),
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu>ul.collapse:not(.in) {
  height: 252px !important;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu:hover>a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu:hover>a {
  width: calc(70vw + 3.75rem);
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu:hover>ul,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu:hover>ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 13.75rem;
  width: 70vw;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu:hover>ul ul a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu:hover>ul ul a {
  width: 101%;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-xl:hover>a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-xl:hover>a {
  width: calc(70vw + 3rem);
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-xl:hover>ul,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-xl:hover>ul {
  max-height: 200px;
  width: 70vw;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-xl:hover>ul ul a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-xl:hover>ul ul a {
  width: 101%;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-lg:hover>a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-lg:hover>a {
  width: calc(55vw + 3rem);
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-lg:hover>ul,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-lg:hover>ul {
  max-height: 200px;
  width: 55vw;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-lg:hover>ul ul a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-lg:hover>ul ul a {
  width: 101%;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-md:hover>a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-md:hover>a {
  width: calc(45vw + 3);
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-md:hover>ul,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-md:hover>ul {
  max-height: 18.75rem;
  width: 45vw;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-md:hover>ul ul a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-md:hover>ul ul a {
  width: 101%;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-sm:hover>a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-sm:hover>a {
  width: calc(30vw + 3);
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-sm:hover>ul,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-sm:hover>ul {
  max-height: 18.125rem;
  width: 30vw;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mega-menu-sm:hover>ul ul a,
[data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mega-menu-sm:hover>ul ul a {
  width: 101%;
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu:hover>a {
  width: calc(60vw + 3.75rem);
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu:hover>ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 25rem;
  width: 60vw;
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu:hover>ul ul a {
  width: 101%;
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-xl:hover>a {
  width: calc(60vw + 3.75rem);
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-xl:hover>ul {
  max-height: 25.625rem;
  width: 60vw;
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-lg:hover>a {
  width: calc(50vw + 3.75rem);
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-lg:hover>ul {
  max-height: 16.25rem;
  width: 50vw;
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-md:hover>a {
  width: calc(40vw + 3.75rem);
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-md:hover>ul {
  max-height: 18.75rem;
  width: 40vw;
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-sm:hover>a {
  width: calc(22vw + 3.75rem);
}

[data-sidebar-style="mini"][data-layout="vertical"][data-container="boxed"] .deznav .metismenu>li.mega-menu-sm:hover>ul {
  max-height: 18.125rem;
  width: 22vw;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu:not(:last-child) {
  position: static;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul {
  left: 0;
  right: 0;
}

[data-theme-version="dark"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #3e454d;
}

[data-sibebarbg="color_2"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #03090f;
}

[data-sibebarbg="color_3"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #09584a;
}

[data-sibebarbg="color_4"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #22134e;
}

[data-sibebarbg="color_5"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #711717;
}

[data-sibebarbg="color_6"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #121843;
}

[data-sibebarbg="color_7"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #3511d0;
}

[data-sibebarbg="color_8"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #1161aa;
}

[data-sibebarbg="color_9"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #002629;
}

[data-sibebarbg="color_10"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li {
  border-color: #af5b00;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li a {
  transition: all .4s ease-in-out;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu ul li a:hover {
  border-radius: 0.25rem;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 13.75rem;
  width: 70vw;
  z-index: 99;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  content: "";
  height: 100%;
  width: 1px;
  position: absolute;
  background-color: #fff;
  right: 2.8125rem;
  top: 0;
}

[data-theme-version="dark"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #2b3136;
}

[data-sibebarbg="color_2"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #0c223a;
}

[data-sibebarbg="color_3"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #0e8670;
}

[data-sibebarbg="color_4"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #331d77;
}

[data-sibebarbg="color_5"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #9c1f1f;
}

[data-sibebarbg="color_6"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #1d276b;
}

[data-sibebarbg="color_7"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #4c27ed;
}

[data-sibebarbg="color_8"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #167cd8;
}

[data-sibebarbg="color_9"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #00545c;
}

[data-sibebarbg="color_10"][data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul::after {
  background-color: #e27500;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu:hover>ul ul a {
  width: 101%;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu-xl:hover>ul {
  max-height: 210px;
  width: 70vw;
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu-lg:hover>ul {
  max-height: 210px;
  width: 700px;
  height: 210px !important;
}

@media only screen and (min-width: 1200px) and (max-width: 1500px) {
  [data-layout="horizontal"] .deznav .metismenu>li.mega-menu-lg:hover>ul {
      width: 700px;
  }
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu-md:hover>ul {
  max-height: 20rem;
  width: 54vw;
}

@media only screen and (min-width: 1200px) and (max-width: 1500px) {
  [data-layout="horizontal"] .deznav .metismenu>li.mega-menu-md:hover>ul {
      width: 60vw;
  }
}

[data-layout="horizontal"] .deznav .metismenu>li.mega-menu-sm:hover>ul {
  max-height: 20rem;
  width: 25vw;
}

@media only screen and (min-width: 1200px) and (max-width: 1500px) {
  [data-layout="horizontal"] .deznav .metismenu>li.mega-menu-sm:hover>ul {
      width: 35vw;
  }
}

[data-layout="horizontal"][data-container="boxed"] .deznav .metismenu>li.mega-menu:hover>ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

[data-layout="horizontal"][data-container="boxed"] .deznav .metismenu>li.mega-menu-xl:hover>ul {
  max-height: 21.875rem;
  width: 100%;
}

[data-layout="horizontal"][data-container="boxed"] .deznav .metismenu>li.mega-menu-lg:hover>ul {
  max-height: 21.875rem;
  width: 55vw;
}

[data-layout="horizontal"][data-container="boxed"] .deznav .metismenu>li.mega-menu-md:hover>ul {
  max-height: 18.75rem;
  width: 45vw;
}

[data-layout="horizontal"][data-container="boxed"] .deznav .metismenu>li.mega-menu-sm:hover>ul {
  max-height: 18.125rem;
  width: 50vw;
}


/*$primary  : #7356f1 !default;*/


/*
0 - 600: Phone
600 - 900: Tablet portrait
900 - 1200: Tablet landscape
1200 - 1800: Normal styles
1800+ : Big Desktop
1em = 16px
The smaller device rules always should write below the bigger device rules
Fixing Order => Base + Typography >> General Layout + Grid >> Page Layout + Component
*/

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li {
  padding: 0 0 0 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li>a {
  font-size: 13px;
  padding: 15px 20px 15px 35px;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

@media only screen and (max-width: 1400px) {
  [data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li>a {
      font-size: 16px;
  }
}

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li>a:before {
  position: absolute;
  height: 100%;
  /* background: #43c4d3; */
  width: 0px;
  content: "";
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  top: 0;
  right: 0;
  border-radius: 5px 0 0 5px;
}

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li.mm-active,
[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li:hover {
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li.mm-active>a,
[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li:hover>a {
  background: -moz-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(19, 180, 151, 0.4) 100%);
  background: -webkit-linear-gradient(left, rgba(30, 87, 153, 0) 0%, rgba(19, 180, 151, 0.4) 100%);
  background: #ff00cc;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#001e5799', endColorstr='#7db9e8', GradientType=1);
  color: #fff;
}

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li.mm-active>a i,
[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li:hover>a i {
  color: #fff;
  font-weight: normal;
}

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li.mm-active>a:before,
[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li:hover>a:before {
  width: 8px;
}

[data-sidebar-style="full"][data-layout="vertical"] .deznav .metismenu>li .has-arrow:after {
  right: 3.125rem;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .nav-header {
  width: 5rem;
  z-index: 999;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .nav-header .brand-logo {
  padding-left: 0;
  padding-right: 0;
  justify-content: center;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .nav-header .nav-control .hamburger .line {
  background-color: #43c4d3 !important;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .copyright,
[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .plus-box {
  display: none;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .header {
  padding-left: 7.5rem;
  width: 100%;
}

[direction="rtl"][data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .header {
  padding: 0 0.9375rem;
  padding-right: 7.5rem;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav {
  width: 5rem;
  overflow: visible;
  position: absolute;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .nav-text {
  display: none;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .slimScrollDiv,
[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .deznav-scroll {
  overflow: visible !important;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu {
  padding-right: 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li {
  position: relative;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li a {
  padding: 0.8125rem 0.9375rem;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li a svg {
  max-width: 24px;
  max-height: 24px;
  margin-right: 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li a:before {
  content: none;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li>ul {
  position: absolute;
  left: 5rem;
  top: 0;
  width: 12rem;
  z-index: 1001;
  display: none;
  padding-left: 1px;
  height: auto !important;
  box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1);
  border-radius: 0;
  margin-left: 0;
  border: 0;
  background: #2f363e;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li>ul:after {
  content: "";
  position: absolute;
  background: inherit;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  left: -5px;
  top: 20px;
}

[direction="rtl"][data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li>ul {
  left: auto;
  right: 3rem;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li>ul li:hover ul {
  left: 11.8125rem;
  top: 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li>ul li:hover ul:after {
  content: none;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu li:hover>ul {
  display: block;
  height: auto;
  overflow: visible;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li {
  transition: all 0.4s ease-in-out;
  padding: 0 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li>a {
  text-align: center;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li>a.has-arrow:after {
  display: none;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li>a i {
  padding-right: 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mm-active>a {
  background: #43c4d3;
  border-radius: 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li.mm-active>a i {
  color: #fff;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover:nth-last-child(-n+1)>ul {
  bottom: 0;
  top: auto;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover>a {
  border-radius: 0;
  background: #43c4d3;
  color: #fff;
}

[data-theme-version="dark"][data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover>a {
  background: #43c4d3;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover>a i {
  color: #fff;
  padding-right: 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover>ul {
  height: auto !important;
  padding: 10px 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover>ul a {
  padding: 6px 20px 6px 20px;
  margin-left: -.1rem;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover>ul ul {
  padding: 10px 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu>li:hover>ul ul a {
  padding: 6px 20px 6px 20px;
  margin-left: -.1rem;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu .nav-label,
[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .deznav .metismenu .nav-badge {
  display: none;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .content-body {
  margin-left: 5rem;
}

[direction="rtl"][data-sidebar-style="full"][data-layout="vertical"] .menu-toggle .content-body {
  margin-right: 7.5rem;
  margin-left: auto;
  border: 0;
}

[data-sidebar-style="full"][data-layout="vertical"] .menu-toggle+.footer {
  padding-left: 7.5rem;
}

[direction="rtl"][data-sidebar-style="full"][data-layout="vertical"] .menu-toggle+.footer {
  padding-left: 0;
  padding-right: 7.5rem;
}

[data-sidebar-style="full"][data-layout="horizontal"] .deznav .metismenu {
  padding: 0 30px;
}

[data-sidebar-style="full"][data-layout="horizontal"] .header .header-content {
  padding-left: 1.875rem;
}


/*
0 - 600: Phone
600 - 900: Tablet portrait
900 - 1200: Tablet landscape
1200 - 1800: Normal styles
1800+ : Big Desktop
1em = 16px
The smaller device rules always should write below the bigger device rules
Fixing Order => Base + Typography >> General Layout + Grid >> Page Layout + Component
*/


/*$primary  : #7356f1 !default;*/

@media only screen and (min-width: 768px) {
  [data-sidebar-style="mini"] .nav-header {
      width: 7.5rem;
  }
  [data-sidebar-style="mini"] .nav-header .nav-control {
      z-index: -1;
  }
  [data-sidebar-style="mini"] .nav-header .nav-control .hamburger {
      left: 7.5rem !important;
  }
  [data-sidebar-style="mini"] .nav-header .nav-control .hamburger .line {
      background-color: #3e4954 !important;
  }
  [data-sidebar-style="mini"] .nav-header .brand-title {
      display: none;
  }
  [data-sidebar-style="mini"] .nav-header .hamburger {
      display: none;
  }
  [data-sidebar-style="mini"] .header .header-content {
      padding-left: 1.875rem;
  }
  [direction="rtl"][data-sidebar-style="mini"] .header .header-content {
      padding-right: 1.875rem;
  }
  [data-sidebar-style="mini"] .deznav {
      width: 7.5rem;
      overflow: visible;
      position: absolute;
  }
  [data-sidebar-style="mini"] .deznav .copyright,
  [data-sidebar-style="mini"] .deznav .plus-box {
      display: none;
  }
  [data-sidebar-style="mini"] .deznav .nav-text {
      display: none;
  }
  [data-sidebar-style="mini"] .deznav .slimScrollDiv,
  [data-sidebar-style="mini"] .deznav .deznav-scroll {
      overflow: visible !important;
  }
  [data-sidebar-style="mini"] .deznav .nav-user {
      padding: 11px;
  }
  [data-sidebar-style="mini"] .deznav .nav-user .media-body {
      display: none;
  }
  [data-sidebar-style="mini"] .deznav .metismenu li a {
      padding: 0.813rem 0.875rem;
  }
  [data-sidebar-style="mini"] .deznav .metismenu li a svg {
      margin-right: 0;
  }
  [data-sidebar-style="mini"] .deznav .metismenu li>ul {
      position: absolute;
      left: 7.5rem;
      top: 2.9375rem;
      width: 11.875rem;
      z-index: 1001;
      display: none;
      padding-left: 1px;
      box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1);
      height: auto !important;
      border-radius: 6px;
      background: #fff;
  }
  [direction="rtl"]:not([data-layout="horizontal"])[data-sidebar-style="mini"] .deznav .metismenu li>ul {
      left: auto;
      right: 7.5rem;
      box-shadow: -6px 6px 10px rgba(0, 0, 0, 0.15);
  }
  [data-sidebar-style="mini"] .deznav .metismenu>li {
      padding: 2px 0;
  }
  [data-sidebar-style="mini"] .deznav .metismenu>li>a.has-arrow:after {
      display: none;
  }
  [data-sidebar-style="mini"] .deznav .metismenu .nav-label,
  [data-sidebar-style="mini"] .deznav .metismenu .nav-badge {
      display: none;
  }
  [data-sidebar-style="mini"] .content-body {
      margin-left: 7.5rem;
  }
  [data-sidebar-style="mini"] .footer {
      padding-left: 7.5rem;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu {
      padding-right: 0;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu li:hover>ul {
      display: block;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li>a {
      text-align: center;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:nth-last-child(-n+1)>ul {
      bottom: 0;
      top: auto !important;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:nth-last-child(-n+1)>ul:after {
      top: auto;
      bottom: 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:nth-last-child(-n+1)>ul {
      bottom: 0;
      top: auto !important;
  }
}

@media only screen and (min-width: 768px) {
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li>ul {
      overflow: visible;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li>ul:after {
      content: none;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li>ul li:hover ul {
      padding: 0;
      width: 13rem;
      left: 13rem;
      top: -10px;
      border: 0;
      margin: 0;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li>ul li:hover ul:after {
      content: none;
  }
  [direction="rtl"][data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li>ul li:hover ul {
      left: auto;
      right: 13rem;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mm-active>a {
      background: #43c4d3;
      color: #fff;
      border-radius: 0;
  }
  [data-theme-version="dark"][data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li.mm-active>a {
      background: #2f363e;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>a {
      background: #43c4d3;
      color: #fff;
      border-radius: 0;
      position: unset;
  }
  [data-theme-version="dark"][data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>a {
      background: #2f363e;
  }
  [direction="rtl"][data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>a .nav-text {
      padding-left: auto;
      padding-right: 1.6875rem;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul {
      height: auto !important;
      overflow: visible;
      border: 0;
      margin-left: 0;
      left: 7.5rem;
      width: 13rem;
      border-radius: 12px;
      border: 0;
      padding: 10px 0;
      top: 0;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul:after {
      content: "";
      position: absolute;
      background: inherit;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      left: -5px;
      top: 20px;
  }
  [data-theme-version="dark"][data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul {
      box-shadow: 0px 9px 10px 0px rgba(0, 0, 0, 0.1);
  }
  [direction="rtl"][data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul {
      left: auto;
      right: 7.5rem;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul a {
      padding: 6px 20px 6px 20px;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul a:before {
      content: none;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul a.has-arrow:after {
      right: 1.25rem;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul ul a {
      padding: 6px 20px 6px 20px;
      margin-left: -1.6px;
  }
  [data-sidebar-style="mini"][data-layout="vertical"] .deznav .metismenu>li:hover>ul ul a:before {
      content: none;
  }
  [data-sidebar-style="mini"][data-header-position="fixed"][data-container="boxed"][data-layout="vertical"] .header {
      width: 1199px;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .deznav .metismenu {
      padding: 0 30px;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .deznav .metismenu>li>a {
      padding: 15px 20px;
  }
  [direction="rtl"][data-sidebar-style="mini"][data-layout="horizontal"] .deznav .metismenu>li>a {
      padding: 15px 20px;
  }
  [direction="rtl"][data-sidebar-style="mini"][data-layout="horizontal"] .deznav .metismenu>li>a svg {
      margin-left: 0;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .deznav .metismenu>li>a svg {
      margin-right: 0;
      margin-top: 0;
  }
}

@media only screen and (max-width: 1199px) {
  [data-sidebar-style="mini"] .deznav li.mm-active ul {
      height: auto !important;
  }
  [data-sidebar-style="mini"] .deznav li a.has-arrow::after {
      transform: rotate(-45deg) translateY(-50%);
  }
}


/*$primary  : #7356f1 !default;*/

@media (min-width: 1199px) {
  [data-layout="horizontal"] .nav-header {
      width: 16rem;
  }
  [data-layout="horizontal"] .nav-header .nav-control {
      display: none;
  }
  [data-layout="horizontal"] .nav-header .brand-logo {
      /*  padding-left: 0;
justify-content: center; */
  }
  [data-layout="horizontal"] .header {
      width: 100%;
      padding-left: 16rem;
  }
  [data-layout="horizontal"] .deznav {
      width: 100%;
      position: relative;
      height: auto;
      padding-bottom: 0;
      top: 0;
      z-index: 2;
  }
  [data-layout="horizontal"] .deznav .slimScrollDiv {
      overflow: visible !important;
  }
  [data-layout="horizontal"] .deznav .slimScrollDiv .deznav-scroll {
      overflow: visible !important;
  }
  [data-layout="horizontal"] .deznav .deznav-scroll {
      overflow: visible !important;
  }
  [data-layout="horizontal"] .deznav .slimScrollBar {
      display: none !important;
  }
  [data-layout="horizontal"] .deznav .nav-user,
  [data-layout="horizontal"] .deznav .nav-label {
      display: none;
  }
  [data-layout="horizontal"] .deznav .metismenu {
      flex-direction: row;
  }
  [data-layout="horizontal"] .deznav .metismenu .collapse.in {
      display: none;
  }
  [data-layout="horizontal"] .deznav .metismenu ul {
      border-left: 0;
  }
  [data-theme-version="dark"][data-layout="horizontal"] .deznav .metismenu ul {
      box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, 0.1);
  }
  [data-layout="horizontal"] .deznav .metismenu li {
      flex-direction: column;
      position: relative;
  }
  [data-layout="horizontal"] .deznav .metismenu li:hover>ul {
      display: block;
  }
  [data-layout="horizontal"] .deznav .metismenu li>ul {
      position: absolute;
      height: auto !important;
      top: 3.25rem;
      width: 100%;
      min-width: 13.75rem;
      z-index: 999;
      left: auto;
      right: auto;
      padding: 0.5rem 0;
      display: none;
      box-shadow: 0px 0px 40px 0px rgba(82, 63, 105, 0.1);
      margin: 0;
      background: #fff;
  }
  [data-theme-version="dark"][data-layout="horizontal"] .deznav .metismenu li>ul {
      box-shadow: 0px 10px 13px 0px rgba(0, 0, 0, 0.1);
  }
  [data-layout="horizontal"] .deznav .metismenu li>ul li {
      padding: 0;
  }
  [data-layout="horizontal"] .deznav .metismenu li>ul li a {
      transition: all .4s ease-in-out;
      padding: 8px 20px 8px 45px;
      margin-left: -.1rem;
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu li>ul li a {
      padding: 8px 45px 8px 20px;
      text-align: right;
  }
  [data-layout="horizontal"] .deznav .metismenu li>ul li a:hover {
      border-radius: .4rem;
  }
  [data-layout="horizontal"] .deznav .metismenu li>ul li a:before {
      left: 22px;
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu li>ul li a:before {
      left: auto;
      right: 21px;
  }
  [data-layout="horizontal"] .deznav .metismenu li>ul ul {
      left: 100%;
      top: 0;
      box-shadow: 0px 10px 13px 0px rgba(82, 63, 105, 0.05);
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu li>ul ul {
      left: auto;
      right: 100%;
  }
  [data-layout="horizontal"] .deznav .metismenu>li {
      flex: 0 0 auto;
      position: relative;
  }
  [data-theme-version="dark"][data-layout="horizontal"] .deznav .metismenu>li {
      border-color: rgba(255, 255, 255, 0.07);
  }
  [data-theme-version="dark"][data-layout="horizontal"] .deznav .metismenu>li.mm-active {
      border-color: transparent;
  }
  [data-layout="horizontal"] .deznav .metismenu>li.mm-active {
      padding: 0;
  }
  [data-layout="horizontal"] .deznav .metismenu>li.mm-active>a {
      background: #fff;
      box-shadow: 0px 0px 13px 0px rgba(82, 63, 105, 0.05);
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu>li:first-child {
      border-right: 0;
  }
  [data-theme-version="dark"][direction="rtl"][data-layout="horizontal"] .deznav .metismenu>li {
      border-color: #3e454d;
  }
  [data-layout="horizontal"] .deznav .metismenu>li>a {
      padding: 15px 40px 15px 15px;
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu>li>a {
      padding: 15px 15px 15px 40px;
  }
  [data-layout="horizontal"] .deznav .metismenu>li>a i {
      padding: 0 0.4375rem 0 0;
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu>li>a i {
      padding: 0 0 0 0.4375rem;
  }
  [data-layout="horizontal"] .deznav .metismenu>li>a .nav-badge {
      display: none;
  }
  [data-layout="horizontal"] .deznav .metismenu>li>a:after {
      right: 20px;
      transform: rotate(-135deg) translateY(-50%);
  }
  [data-layout="horizontal"] .deznav .metismenu>li:hover {
      border-color: transparent;
  }
  [data-layout="horizontal"] .deznav .metismenu>li:hover>ul {
      display: flex !important;
      flex-direction: column;
      flex-wrap: wrap;
      height: auto !important;
      box-shadow: 0px 10px 13px 0px rgba(82, 63, 105, 0.05);
  }
  [data-theme-version="dark"][data-layout="horizontal"] .deznav .metismenu>li:hover>ul {
      box-shadow: 0px 0 13px 0px rgba(0, 0, 0, 0.1);
  }
  [data-layout="horizontal"] .deznav .metismenu>li>ul>li:hover ul.collapse {
      display: block !important;
      position: absolute;
      left: auto !important;
      right: -100% !important;
      top: 0 !important;
  }
  [data-layout="horizontal"] .deznav .metismenu>li:nth-last-child(-n+5)>ul {
      left: auto;
      right: 0;
  }
  [data-layout="horizontal"] .deznav .metismenu>li:nth-last-child(-n+5)>ul>li:hover ul.collapse {
      right: auto !important;
      left: -100% !important;
  }
  [data-layout="horizontal"] .deznav .metismenu>li:last-child>ul ul {
      left: -100%;
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu>li:nth-last-child(-n+3)>ul {
      left: 0;
      right: auto;
  }
  [direction="rtl"][data-layout="horizontal"] .deznav .metismenu>li:nth-last-child(-n+3)>ul>li:hover ul.collapse {
      right: -100% !important;
      left: auto !important;
  }
  [data-layout="horizontal"] .content-body {
      margin-left: 0;
  }
  [data-layout="horizontal"] .content-body .page-titles {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 1.875rem;
  }
  [data-layout="horizontal"] .footer {
      margin-left: 0;
      margin: 0 auto;
      padding-left: 0;
  }
  [data-layout="horizontal"] .sidebar-right {
      z-index: 1;
  }
  [data-header-position="fixed"][data-layout="horizontal"] .deznav {
      top: 5rem;
  }
  [data-header-position="fixed"][data-sidebar-position="fixed"] .deznav {
      position: fixed;
  }
  [data-header-position="fixed"][data-layout="horizontal"][data-sidebar-position="fixed"] .content-body {
      padding-top: 8.3rem;
  }
  [data-layout="horizontal"][data-container="boxed"] .footer {
      margin-left: 0;
      max-width: 1199px;
      margin: 0 auto;
  }
  [data-layout="horizontal"][data-container="wide"] .page-titles {
      margin-left: -30px;
      margin-right: -30px;
  }
  [data-layout="horizontal"][data-sidebar-style="compact"] .page-titles {
      margin-top: 0;
  }
  [data-layout="horizontal"][data-sidebar-style="compact"] .deznav .metismenu>li>ul {
      top: 4.315rem;
  }
  [data-layout="horizontal"][data-sidebar-style="compact"] .deznav .metismenu>li>a {
      padding: 0.8125rem 2.1rem;
  }
  [data-layout="horizontal"][data-sidebar-style="compact"] .deznav .metismenu>li>a::after {
      display: none;
  }
  [data-layout="horizontal"][data-sidebar-style="compact"] .deznav .metismenu>li li {
      text-align: left;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .nav-header {
      width: 6rem;
      padding-left: 30px;
      padding-right: 30px;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .nav-header .brand-logo {
      justify-content: start;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .header {
      width: 100%;
      padding-left: 6rem;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .metismenu>li:hover a {
      width: auto;
  }
  [data-sidebar-style="mini"][data-layout="horizontal"] .metismenu>li:hover a .nav-text {
      display: none;
  }
  [data-header-position="fixed"][data-layout="horizontal"][data-sidebar-position="fixed"][data-sidebar-style="compact"] .content-body {
      padding-top: 8.75rem;
  }
  [data-sidebar-position="fixed"][data-layout="horizontal"] .deznav.fixed {
      position: fixed;
      left: 0;
      top: 0;
  }
}

@media (min-width: 767px) {
  [data-sidebar-style="compact"] .deznav .nav-user {
      display: none;
  }
  [data-sidebar-style="compact"] .deznav .metismenu li {
      text-align: center;
  }
  [data-sidebar-style="compact"] .deznav .metismenu li a {
      padding: 0.625rem 0.9375rem 0.625rem 0.9375rem;
  }
  [data-sidebar-style="compact"] .deznav .metismenu li a svg {
      max-width: 21px;
      max-height: 21px;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }
  [data-sidebar-style="compact"] .deznav .metismenu li ul:after {
      content: none;
  }
  [data-sidebar-style="compact"] .nav-text {
      display: inline-block;
      margin-top: 0.3125rem;
  }
  [data-sidebar-style="compact"] .nav-label.first {
      display: none;
  }
  [data-sidebar-style="compact"] .nav-badge {
      display: none;
  }
  [data-sidebar-style="compact"] .footer {
      padding-left: 9.375rem;
  }
  [data-sidebar-style="compact"] .content-body {
      margin-left: 9.375rem;
  }
}

[data-layout="horizontal"][data-sidebar-style="compact"] .footer {
  padding-left: 0;
}

[data-layout="horizontal"][data-sidebar-style="compact"] .content-body {
  margin-left: 0;
}

[data-layout="horizontal"][data-sidebar-style="compact"] .deznav .metismenu {
  padding: 0 30px;
}

[data-layout="vertical"][data-sidebar-style="compact"] .deznav {
  width: 9.375rem;
}

[data-layout="vertical"][data-sidebar-style="compact"] .deznav .metismenu ul {
  margin-left: 0;
  border: 0;
  background: rgba(0, 0, 0, 0.02);
  padding: 10px 0;
}

[data-theme-version="dark"][data-layout="vertical"][data-sidebar-style="compact"] .deznav .metismenu ul {
  background: 255, 255, 255, 0.05;
}

[data-layout="vertical"][data-sidebar-style="compact"] .deznav .metismenu ul a:before {
  content: none;
}

[data-layout="vertical"][data-sidebar-style="compact"] .deznav .metismenu ul ul a {
  padding: 0.625rem 0.9375rem;
}

[data-layout="vertical"][data-sidebar-style="compact"] .deznav .metismenu>li>a.has-arrow::after {
  top: 1px;
  display: inline-block;
  right: auto;
  margin-left: 5px;
  position: relative;
  width: 7px;
  height: 7px;
  border-width: 2px 0px 0px 2px;
}

[direction="rtl"][data-layout="vertical"][data-sidebar-style="compact"] .deznav .metismenu>li>a.has-arrow::after {
  left: auto;
  margin-left: 0;
  margin-right: 5px;
}

@media (min-width: 767px) {
  [data-sidebar-style="icon-hover"][data-layout="horizontal"] .metismenu {
      padding: 0 30px;
  }
  [data-sidebar-style="icon-hover"][data-layout="horizontal"] .header .header-content {
      padding-left: 1.875rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .nav-header {
      width: 5.063rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .nav-header .brand-logo {
      padding-left: 20px;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .nav-header .brand-logo {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .nav-header .brand-logo .logo-abbr {
      display: block;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .nav-header .brand-logo .brand-title {
      display: none;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .nav-header .nav-control {
      display: none;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .header {
      padding-left: 5.063rem;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .header {
      padding-right: 4.38rem;
      padding-left: 0.9375rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .header .header-content {
      padding-left: 1.375rem;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .header .header-content {
      padding-right: 1.375rem;
      padding-left: 0;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav {
      overflow: visible;
      position: absolute;
      left: -12.125rem;
  }
}

@media only screen and (min-width: 767px) and (min-width: 1200px) and (max-width: 1350px) {
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav {
      left: -10rem;
  }
}

@media (min-width: 767px) {
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav {
      left: auto;
      right: -12.125rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .nav-label {
      display: none;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu>li>a {
      display: flex;
      justify-content: space-between;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu>li>a>svg,
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu>li>a>i {
      order: 1;
      margin-right: 0;
      margin-top: 0;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul {
      border-left: 0;
      padding-left: 0;
      padding-right: 28px;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul {
      padding-right: 0;
      padding-left: 28px;
  }
  [data-theme-version="dark"][data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul {
      border-color: #3e454d;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul:after {
      left: auto;
      right: 28px;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul:after {
      left: 28px;
      right: auto;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul a {
      position: relative;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul a::before {
      left: auto;
      right: -5px;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu ul a::before {
      right: auto;
      left: -5px;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu .has-arrow::after {
      right: 5rem;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .deznav .metismenu .has-arrow::after {
      right: auto;
      left: 5rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .icon-hover-toggle .nav-header {
      width: 17.1875rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .icon-hover-toggle .nav-header .brand-logo {
      padding-left: 1.6rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .icon-hover-toggle .nav-header .brand-logo .brand-title {
      display: block;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .icon-hover-toggle .header {
      padding-left: 4.38rem;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .icon-hover-toggle .header {
      padding-right: 4.38rem;
      padding-left: 0.9375rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .icon-hover-toggle .deznav {
      left: 0;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .icon-hover-toggle .deznav {
      left: auto;
      right: 0;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .content-body {
      margin-left: 5rem;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .content-body {
      margin-left: 0;
      margin-right: 5rem;
  }
  [data-sidebar-style="icon-hover"][data-layout="vertical"] .footer {
      padding-left: 4.375rem;
  }
  [direction="rtl"][data-sidebar-style="icon-hover"][data-layout="vertical"] .footer {
      margin-left: 0;
      margin-right: 4.375rem;
  }
}

@media (min-width: 767px) {
  [data-sidebar-style="modern"] .nav-header {
      width: 9.375rem;
  }
  [data-sidebar-style="modern"] .nav-header .brand-logo {
      justify-content: center;
  }
  [data-sidebar-style="modern"] .deznav .metismenu>li {
      text-align: center;
  }
  [data-sidebar-style="modern"] .deznav .metismenu>li>a {
      padding: 20px 15px 20px 15px !important;
  }
  [data-sidebar-style="modern"] .deznav .metismenu>li>a::after {
      display: none;
  }
  [data-sidebar-style="modern"] .deznav .metismenu>li>a:hover>a,
  [data-sidebar-style="modern"] .deznav .metismenu>li>a:focus>a,
  [data-sidebar-style="modern"] .deznav .metismenu>li>a:active>a,
  [data-sidebar-style="modern"] .deznav .metismenu>li>a.mm-active>a {
      background-color: #ccfaf1;
  }
  [data-sidebar-style="modern"] .deznav .metismenu>li.mm-active {
      padding: 0;
  }
  [data-sidebar-style="modern"] .deznav .metismenu>li li {
      text-align: left;
  }
  [direction="rtl"][data-sidebar-style="modern"] .deznav .metismenu>li li {
      text-align: right;
  }
  [data-sidebar-style="modern"] .deznav .metismenu li a {
      padding: 0.625rem 0.9375rem 0.625rem 0.9375rem;
  }
  [data-sidebar-style="modern"] .deznav .metismenu li ul:after {
      content: none;
  }
  [data-sidebar-style="modern"] .deznav .metismenu li>ul {
      height: auto !important;
  }
  [data-sidebar-style="modern"] .deznav .metismenu .nav-label {
      display: none;
  }
  [data-sidebar-style="modern"] .deznav .nav-label {
      display: none;
  }
  [data-sidebar-style="modern"] .deznav .nav-text {
      display: block;
      margin-top: 0.3125rem;
  }
  [data-sidebar-style="modern"] .footer {
      padding-left: 9.375rem;
  }
  [data-sidebar-style="modern"] .content-body {
      margin-left: 9.375rem;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav {
      width: 9.375rem;
      left: 0;
  }
  [direction="rtl"][data-sidebar-style="modern"][data-layout="vertical"] .deznav {
      left: auto;
      right: 0;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .slimScrollDiv,
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .deznav-scroll {
      overflow: visible !important;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu>li>a i {
      font-size: 20px;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu>li>ul {
      display: none;
      padding: 1.875rem 0.9375rem;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li {
      position: relative;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li a {
      padding: 0.625rem 1.5rem;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li a:before {
      content: none;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li ul {
      position: absolute;
      left: 105%;
      top: 0;
      bottom: auto;
      background-color: #fff;
      border: 1px solid #d7dae3;
      width: 200px;
  }
  [data-theme-version="dark"][data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li ul {
      background: #2f363e;
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  }
  [direction="rtl"][data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li ul {
      left: auto;
      right: 105%;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li:hover>ul {
      display: block;
      left: 100%;
      padding: 1rem 0;
      margin-left: -10px;
      border: 0;
      box-shadow: 5px 0px 13px 0px rgba(82, 63, 105, 0.05);
  }
  [data-theme-version="dark"][data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li:hover>ul {
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  }
  [direction="rtl"][data-sidebar-style="modern"][data-layout="vertical"] .deznav .metismenu li:hover>ul {
      left: auto;
      right: 100%;
      box-shadow: -5px 0px 13px 0px rgba(82, 63, 105, 0.05);
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .nav-label {
      display: none;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .deznav .nav-text {
      display: block;
      margin-top: 0;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .menu-toggle .deznav {
      left: -9.375rem;
  }
  [direction="rtl"][data-sidebar-style="modern"][data-layout="vertical"] .menu-toggle .deznav {
      left: auto;
      right: -9.375rem;
  }
  [data-sidebar-style="modern"][data-layout="vertical"] .menu-toggle .content-body {
      margin-left: 0;
  }
  [direction="rtl"][data-sidebar-style="modern"][data-layout="vertical"] .menu-toggle .content-body {
      margin-right: 0;
  }
  [data-sidebar-style="modern"][data-layout="horizontal"] .footer,
  [data-sidebar-style="modern"][data-layout="horizontal"] .content-body {
      margin-left: 0;
  }
  [data-sidebar-style="modern"][data-layout="horizontal"] .deznav .metismenu {
      padding: 0 30px;
  }
  [data-sidebar-style="modern"][data-layout="horizontal"] .deznav .metismenu>li>a {
      padding: 0.8125rem 2.25rem;
  }
  [data-sidebar-style="modern"][data-layout="horizontal"] .deznav .metismenu>li>ul {
      top: 4.5625rem;
  }
  [data-sidebar-style="modern"][data-layout="horizontal"][data-container="boxed"] .deznav .metismenu>li>a {
      padding: 0.8125rem 1.25rem;
  }
}

[data-sidebar-style="overlay"] .deznav {
  left: -100%;
}

[direction="rtl"][data-sidebar-style="overlay"] .deznav {
  left: auto;
  right: -100%;
}

[data-sidebar-style="overlay"] .content-body {
  margin-left: 0;
}

[data-sidebar-style="overlay"] .nav-header {
  position: absolute;
}

[data-sidebar-style="overlay"] .nav-header .hamburger.is-active {
  left: 0;
}

[data-sidebar-style="overlay"] .nav-header .hamburger.is-active .line {
  background-color: #43c4d3;
}

[data-sidebar-style="overlay"] .menu-toggle .nav-header {
  position: absolute;
  left: auto;
}

[data-sidebar-style="overlay"] .menu-toggle .deznav {
  left: 0;
}

[direction="rtl"][data-sidebar-style="overlay"] .menu-toggle .deznav {
  left: auto;
  right: 0;
}

[data-sidebar-style="overlay"] .footer {
  padding-left: 0;
}

[data-sidebar-style="overlay"][data-header-position="fixed"] .nav-header {
  position: fixed;
}

[data-sidebar-position="fixed"][data-header-position="fixed"] .nav-header {
  position: fixed;
}

[data-sidebar-position="fixed"][data-layout="vertical"] .nav-header {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

[data-sidebar-position="fixed"][data-layout="vertical"] .deznav {
  position: fixed;
}

[data-sidebar-position="fixed"][data-layout="vertical"] .deznav .deznav-scroll {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

[data-sidebar-position="fixed"][data-layout="vertical"] .menu-toggle .deznav {
  position: fixed;
}

[data-header-position="fixed"][data-sidebar-position="fixed"][data-sidebar-style="overlay"][data-layout="vertical"][data-container="boxed"] .deznav {
  position: absolute;
}

.sidebar-right {
  right: -15.625rem;
  position: fixed;
  top: 0;
  width: 15.625rem;
  background-color: #fff;
  height: calc(100% - 7.0625rem);
  margin-top: 5rem;
  transition: all .5s ease-in-out;
  padding-bottom: 1.875rem;
  box-shadow: -2px 3px 10px 0px rgba(119, 119, 119, 0.1);
}

[direction="rtl"] .sidebar-right .slimScrollDiv {
  overflow: visible !important;
}

.sidebar-right .sidebar-right-trigger {
  position: absolute;
  z-index: 9;
  top: 4.75rem;
  right: 100%;
  background-color: #fff;
  color: #43c4d3;
  display: inline-block;
  height: 3rem;
  width: 3rem;
  text-align: center;
  font-size: 1.75rem;
  line-height: 3rem;
  border-radius: 5px 0 0 5px;
  box-shadow: -5px 3px 5px 0px rgba(119, 119, 119, 0.15);
}

.sidebar-right .sidebar-right-trigger {
  background-color: #31343b;
  color: #fff;
}

.sidebar-right .sidebar-right-trigger:hover {
  color: #43c4d3;
}

.sidebar-right.show {
  right: 0;
  z-index: 999;
}

.sidebar-right .nav-tabs {
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
}

.sidebar-right .nav-tabs {
  background-color: #24292d;
}

.sidebar-right .nav-tabs .nav-item {
  margin-bottom: 0;
  flex: 1;
}

.sidebar-right .nav-tabs .nav-item .nav-link {
  border: 0;
  font-size: 1.125rem;
  position: relative;
  text-align: center;
  background-color: #fff;
}

.sidebar-right .nav-tabs .nav-item .nav-link::after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  content: "";
  background: transparent;
}

.sidebar-right .nav-tabs .nav-item .nav-link {
  background-color: #24292d;
}

.sidebar-right .nav-tabs .nav-item .nav-link.active {
  border-right: none;
  border-left: none;
  border-top: none;
}

.sidebar-right .tab-content {
  padding: 1.25rem;
}

.sidebar-right .tab-content .tab-pane .admin-settings>div {
  margin-bottom: 10px;
}

.sidebar-right .tab-content .tab-pane .admin-settings p {
  margin-bottom: 0.125rem;
}

.sidebar-right .tab-content .tab-pane .admin-settings input[type="radio"] {
  display: none;
}

.sidebar-right .tab-content .tab-pane .admin-settings input[type="radio"]+label {
  display: inline-block;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transition: all .1s ease;
  border-radius: 4px;
  margin-right: 5px;
  margin-bottom: 3px;
}

.sidebar-right .tab-content .tab-pane .admin-settings input[type="radio"]:checked+label {
  position: relative;
}

.sidebar-right .tab-content .tab-pane .admin-settings input[type="radio"]:checked+label::after {
  height: 33px;
  width: 33px;
  left: -4px;
  top: -4px;
  content: "";
  position: absolute;
  background-color: inherit;
  border-radius: 6px;
  opacity: 0.4;
}




/*$primary  : #7356f1 !default;*/

{
  background: #24292d;
  /* color: #b7b7b7; */
}

a.link {
  color: #ddd;
}

a.link:focus,
a.link:hover {
  color: #3C65F5;
}

a:hover {
  color: #fff;
}

.border-right {
  border-right: 1px solid #3e454d !important;
}

.border-left {
  border-left: 1px solid #3e454d !important;
}

.border-top {
  border-top: 1px solid #3e454d !important;
}

.border-bottom {
  border-bottom: 1px solid #3e454d !important;
}

.border {
  border: 1px solid #3e454d !important;
}

.dropdown-menu {
  background-color: #272e35;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
}

.dropdown-menu .dropdown-item.selected,
.dropdown-menu .dropdown-item.selected.active,
.dropdown-menu .dropdown-item.active,
.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus {
  background-color: #2f363e;
  color: #b7b7b7;
}

.btn-outline-dark:hover {
  background-color: #24292d;
  border-color: #24292d;
}

.tdl-holder input[type=text]::placeholder {
  color: #b7b7b7;
}

.tdl-holder label:hover {
  background-color: #3e454d;
  color: #fff;
}

.text-muted {
  color: #b7b7b7 !important;
}


.modal-footer,
.modal-header {
  border-color: #3e454d;
}

.close {
  font-weight: 400;
  color: #fff;
  text-shadow: none;
}

.close:hover {
  color: #fff;
}

.table strong {
  color: #fff;
}

.text-dark {
  color: #b7b7b7 !important;
}

.star-rating .product-review,
.new-arrival-content .item {
  color: #fff;
}

.custom-dropdown .dropdown-menu {
  border-color: #3e454d;
}

.plus-minus-input .custom-btn {
  background: #24292d;
  border-color: #3e454d;
}

.dropdown-divider,
.size-filter ul li {
  border-color: #3e454d;
}

.custom-select {
  border-color: #3e454d;
  color: #b7b7b7;
  background: #24292d;
}

.nav-tabs {
  border-color: #3e454d;
}

.mail-list .list-group-item.active i {
  color: #fff;
}

hr {
  border-color: #3e454d;
}

.grid-col {
  background: #24292d;
}

.noUi-target {
  border-color: #3e454d;
  border-radius: 8px;
  box-shadow: none;
}

.noUi-target .noUi-connects {
  background: #3e454d;
}

.noUi-marker-large,
.noUi-marker {
  background: #3e454d;
}

.input-group-text {
  background: #3e454d;
  color: #b7b7b7;
}


.notification_dropdown .dropdown-menu-right .all-notification {
  border-color: #3e454d;
}

#user-activity .nav-tabs .nav-link {
  border-color: #3e454d;
}

.list-group-item-action {
  color: #b7b7b7;
}

.list-group-item-action:focus,
.list-group-item-action:hover,
.list-group-item-action:focus {
  background-color: #24292d;
  border-color: #24292d;
}

.list-group-item.active {
  color: #fff;
  border-color: #43c4d3;
}

.list-group-item.active:focus,
.list-group-item.active:hover,
.list-group-item.active:focus {
  background-color: #43c4d3;
  border-color: #43c4d3;
  color: #fff;
}

.swal2-popup {
  background: #2f363e;
}

.header {
  background-color: #24292d;
}

.header-left input {
  background: #24292d !important;
  border-color: transparent;
  color: #fff !important;
}

.header-left input:focus {
  box-shadow: none;
  border-color: #43c4d3;
}

.header-left input::placeholder {
  color: #fff;
}

.header-left .search_icon {
  background: #24292d !important;
}

.header-left .search_icon i {
  color: #fff;
}

.header-right .right-sidebar a {
  color: #43c4d3;
  border-color: #3e454d;
}

.header-right .header-profile>a.nav-link .header-info strong {
  color: #fff;
}

.header-right .notification_dropdown .nav-link {
  background: #24292d;
}

.header-right .dropdown .nav-link {
  color: #fff;
  background: #2f363e;
}

.header-right .dropdown .nav-link:hover {
  color: #fff;
}

.header-right .notification_dropdown .dropdown-item a {
  color: #fff;
}

.nav-header,
.nav-control {
  background-color: #2f363e;
}

.nav-control {
  color: #fff;
}

.brand-logo {
  color: #fff;
}

.brand-logo:hover {
  color: #fff;
}

.nav-header,
.nav-control {
  background-color: #2f363e;
}

.nav-control {
  color: #fff;
}

.brand-logo {
  color: #fff;
}

.brand-logo:hover {
  color: #fff;
}

[data-theme-version="dark"][data-sidebar-style="mini"] .deznav .metismenu li>ul {
  background-color: #2f363e;
}

.fixed-content-box {
  background-color: #2f363e;
}

.fixed-content-box .head-name {
  background: #2f363e;
  color: #fff;
  border-color: #3e454d;
}

.fixed-content-box+.header+.deznav {
  background-color: #24292d;
}

.deznav {
  background-color: #2f363e;
}

.deznav .metismenu>li>a {
  color: #b3b3b3;
}

.deznav .metismenu>li:hover>a,
.deznav .metismenu>li:focus>a,
.deznav .metismenu>li.mm-active>a {
  color: #fff;
}

.deznav .metismenu>li:hover>a::after,
.deznav .metismenu>li:focus>a::after,
.deznav .metismenu>li.mm-active>a::after {
  border-color: #fff;
}

.deznav .metismenu>li.mm-active ul ul {
  background-color: transparent;
}

.deznav .metismenu ul:after {
  background-color: #3e454d;
}

.deznav .metismenu ul a:hover,
.deznav .metismenu ul a:focus,
.deznav .metismenu ul a.mm-active {
  color: #fff;
}

.deznav .metismenu ul a:before {
  background-color: #fff;
}

.deznav .metismenu a {
  color: #b3b3b3;
}

.deznav .metismenu .has-arrow:after {
  border-color: #fff;
}

.sidebar-right {
  background-color: #2b3136;
}

.sidebar-right .nav-tabs {
  background-color: #2b3136;
  border-bottom: 1px solid #24292d;
}

.sidebar-right .nav-tabs .nav-link.active {
  background-color: #24292d;
}

.footer {
  background-color: transparent;
}

.footer .copyright {
  background-color: transparent;
}

.footer .copyright p {
  color: #fff;
}


@media only screen and (max-width: 1400px) {
  .form-control {
      height: 41px;
  }
}

.form-control:hover,
.form-control:focus,
.form-control.active {
  box-shadow: none;
  background: #d9d9d9;
  color: #3e4954;
}

.form-control.form-control-sm {
  height: 28px;
}

.form-control.form-control-lg {
  height: 43px;
}

.input-rounded {
  border-radius: 100px;
}


.input-group-text {
  background: #d7dae3;
  border: 1px solid transparent;
  min-width: 50px;
  display: flex;
  justify-content: center;
  padding: 0.532rem 0.75rem;
}

.input-group-text i {
  font-size: 16px;
}

.custom-file-label {
  height: 40px;
  padding: 0.5rem 0.75rem;
}

.input-group-prepend .btn,
.input-group-append .btn {
  z-index: 0;
}

.custom-select {
  background: none;
  border-color: #d7dae3;
  color: #3e4954;
}

.custom-select:focus {
  box-shadow: none;
  border-color: #43c4d3;
  color: #43c4d3;
}

.custom-file-label:after {
  background: #656C73;
  border: 1px solid #d7dae3;
  color: #fff;
}

.custom-file-label:after {
  background: #3e454d;
  border-color: #3e454d;
  color: #b7b7b7;
}

.custom_file_input .custom-file-label::after {
  height: 100%;
}

.form-control:disabled,
.form-control[readonly] {
  background: #fff;
  opacity: 1;
}

.custom-file-label {
  background: #fff;
  border-color: #d7dae3;
}

.custom-file-label {
  background: #24292d;
  border-color: #3e454d;
}


/*$primary  : #7356f1 !default;*/

input[type="checkbox"]:after {
  content: '';
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: 0px;
  margin-left: -1px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: #d4d7da;
  line-height: 1.3;
}

input[type="checkbox"]:checked:after {
  width: 1rem;
  height: 1rem;
  display: block;
  content: "\f00c";
  font-family: 'FontAwesome';
  color: #fff;
  font-weight: 100;
  font-size: 12px;
  text-align: center;
  border-radius: 3px;
  background: #43c4d3;
}

.form-check-label {
  margin-left: 5px;
  margin-top: 3px;
}

.form-check-inline .form-check-input {
  margin-right: 0.625rem;
}

.custom-control-label:before,
.custom-control-label:after {
  top: 2px;
  width: 1.25rem;
  height: 1.25rem;
  border-color: #e7e7e7;
}


.accordion-primary .accordion__header {
  background: #43c4d3;
  border-color: #43c4d3;
  color: #fff;
  box-shadow: 0 15px 20px 0 rgba(19, 180, 151, 0.15);
}

.accordion-primary .accordion__header.collapsed {
  background: #b5f7eb;
  border-color: #b5f7eb;
  color: #211c37;
  box-shadow: none;
}

.accordion-primary .accordion__header.collapsed {
  background: rgba(19, 180, 151, 0.2);
  border-color: rgba(19, 180, 151, 0.2);
  color: #b7b7b7;
}

.accordion-primary-solid .accordion__header {
  background: #43c4d3;
  border-color: #43c4d3;
  color: #fff;
  box-shadow: 0 -10px 20px 0 rgba(19, 180, 151, 0.15);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.accordion-primary-solid .accordion__header.collapsed {
  background: #b5f7eb;
  border-color: #b5f7eb;
  color: #211c37;
  box-shadow: none;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion-primary-solid .accordion__header.collapsed {
  background: rgba(19, 180, 151, 0.2);
  border-color: rgba(19, 180, 151, 0.2);
  color: #b7b7b7;
}

.accordion-primary-solid .accordion__body {
  border: 2px solid #43c4d3;
  border-top: none;
  box-shadow: 0 15px 20px 0 rgba(19, 180, 151, 0.15);
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion-danger .accordion__header {
  background: #B03636;
  border-color: #B03636;
  color: #fff;
  box-shadow: 0 15px 20px 0 rgba(176, 54, 54, 0.15);
}

.accordion-danger .accordion__header.collapsed {
  background: #e19e9e;
  border-color: #e19e9e;
  color: #211c37;
  box-shadow: none;
}

.accordion-danger-solid .accordion__header {
  background: #B03636;
  border-color: #B03636;
  color: #fff;
  box-shadow: 0 -10px 20px 0 rgba(176, 54, 54, 0.15);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.accordion-danger-solid .accordion__header.collapsed {
  background: #e19e9e;
  border-color: #e19e9e;
  color: #211c37;
  box-shadow: none;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion-danger-solid .accordion__header.collapsed {
  background: rgba(176, 54, 54, 0.15);
  border-color: rgba(176, 54, 54, 0.15);
  color: #b7b7b7;
}

.accordion-danger-solid .accordion__body {
  border: 2px solid #B03636;
  border-top: none;
  box-shadow: 0 15px 20px 0 rgba(176, 54, 54, 0.15);
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion__item {
  margin-bottom: 1.25rem;
}

.accordion__header {
  padding: 1rem 1.75rem;
  border: 1px solid #d7dae3;
  cursor: pointer;
  position: relative;
  color: #333;
  font-weight: 400;
  border-radius: 0.75rem;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

.accordion__header {
  color: #fff;
  border-color: #3e454d;
}

.accordion__header--indicator {
  font-family: 'themify';
  position: absolute;
  right: 1.5625rem;
  top: 50%;
  transform: translateY(-50%);
}

[direction="rtl"] .accordion__header--indicator {
  right: auto;
  left: 1.5625rem;
}

.accordion__header--indicator.indicator_bordered {
  display: inline-block;
  width: 25px;
  text-align: center;
  height: 25px;
  border: 1px solid #d7dae3;
  border-radius: 50%;
  line-height: 25px;
}

.accordion__header:not(.collapsed) .accordion__header--indicator::before {
  content: "\e622";
}

.accordion__header:not(.collapsed) .accordion__header--indicator.style_two::before {
  content: "\e648";
}

.accordion__header.collapsed .accordion__header--indicator::before {
  content: "\e61a";
}

.accordion__header.collapsed .accordion__header--indicator.style_two::before {
  content: "\e64b";
}

.accordion__body--text {
  padding: 0.875rem 1.25rem;
}

.accordion-bordered .accordion__body {
  border: 1px solid #d7dae3;
  border-top: none;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion-bordered .accordion__body {
  border-color: #3e454d;
}

.accordion-bordered .accordion__header.collapsed {
  border-radius: 0.75rem;
}

.accordion-bordered .accordion__header {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.accordion-no-gutter .accordion__item {
  margin-bottom: 0;
}

.accordion-no-gutter .accordion__item .accordion__header.collapsed {
  border-bottom: none;
}

.accordion-no-gutter .accordion__item:last-child .accordion__header {
  border-bottom: 1px solid #d7dae3;
}

.accordion-no-gutter .accordion__item:last-child .accordion__header {
  border-color: #3e454d;
}

.accordion-no-gutter.accordion__bordered .accordion__item:not(:last-child) .accordion__body {
  border-bottom: none;
}

.accordion-left-indicator .accordion__header--text {
  padding-left: 2.5rem;
}

.accordion-left-indicator .accordion__header--indicator {
  right: auto;
  left: 1.5625rem;
}

.accordion-with-icon .accordion__header--text {
  padding-left: 2.5rem;
}

[direction="rtl"] .accordion-with-icon .accordion__header--text {
  padding-left: 0;
  padding-right: 2.5rem;
}

.accordion-with-icon .accordion__header--icon {
  position: absolute;
  right: auto;
  left: 1.5625rem;
  font-family: 'themify';
}

[direction="rtl"] .accordion-with-icon .accordion__header--icon {
  left: auto;
  right: 1.5625rem;
}

.accordion-with-icon .accordion__header--icon::before {
  content: "\e645";
}

.accordion-header-bg .accordion__header {
  background-color: #D1D1D1;
}

.accordion-header-bg .accordion__header {
  background-color: #24292d;
  color: #fff;
}

.accordion-header-bg .accordion__header--primary {
  background-color: #43c4d3;
  color: #fff;
  border-color: #43c4d3;
}

.accordion-header-bg .accordion__header--primary {
  background-color: #43c4d3;
}

.accordion-header-bg .accordion__header--info {
  background-color: #3C65F5;
  color: #fff;
  border-color: #3C65F5;
}

.accordion-header-bg .accordion__header--info {
  background-color: #3C65F5;
}

.accordion-header-bg .accordion__header--success {
  background-color: #2bc155;
  color: #fff;
  border-color: #2bc155;
}

.accordion-header-bg .accordion__header--success {
  background-color: #2bc155;
}

.accordion-header-bg.accordion-no-gutter .accordion__header {
  border-color: transparent;
  border-radius: 0;
}

.accordion-header-bg.accordion-no-gutter .accordion__item:first-child .accordion__header {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.accordion-header-bg.accordion-no-gutter .accordion__item:last-child .accordion__header {
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion.accordion-no-gutter .accordion__header {
  border-radius: 0;
}

.accordion.accordion-no-gutter .accordion__header.collapsed {
  border-radius: 0;
}

.accordion.accordion-no-gutter .accordion__body {
  border-radius: 0;
}

.accordion.accordion-no-gutter .accordion__item:first-child .accordion__header {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.accordion.accordion-no-gutter .accordion__item:last-child .accordion__header.collapsed {
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion.accordion-no-gutter .accordion__item:last-child .accordion__body {
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion-solid-bg .accordion__header {
  border-color: transparent;
  background-color: #b5f7eb;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.accordion-solid-bg .accordion__header {
  background-color: #24292d;
}

.accordion-solid-bg .accordion__header.collapsed {
  border-radius: 0.75rem;
}

.accordion-solid-bg .accordion__body {
  border-color: transparent;
  background-color: #b5f7eb;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion-solid-bg .accordion__body {
  background-color: #24292d;
}

.accordion-active-header .accordion__header:not(.collapsed) {
  background-color: #3C65F5;
  border-color: #3C65F5;
  color: #fff;
}

.accordion-header-shadow .accordion__header {
  border: none;
  box-shadow: 0 0 0.9375rem -3px rgba(0, 0, 0, 0.3);
}

.accordion-rounded-stylish .accordion__header {
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
}

.accordion-rounded-stylish .accordion__body {
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.accordion-rounded .accordion__header {
  border-radius: 0.3125rem;
}

.accordion-gradient .accordion__header {
  color: #fff;
  background-image: linear-gradient(to right, rgba(186, 1, 181, 0.85) 0%, rgba(103, 25, 255, 0.85) 100%);
  border-color: transparent;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.accordion-gradient .accordion__header.collapsed {
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.accordion-gradient .accordion__body {
  color: #fff;
  background-image: linear-gradient(to right, rgba(186, 1, 181, 0.85) 0%, rgba(103, 25, 255, 0.85) 100%);
  border-color: transparent;
}

.alert {
  border-radius: 0.75rem;
  padding: 1rem 1.5rem;
}

.alert p {
  line-height: 1.5;
}

.alert-rounded {
  border-radius: 30px;
}

.alert-primary {
  background: #b5f7eb;
  border-color: #b5f7eb;
  color: #43c4d3;
}

.alert-primary {
  background: rgba(19, 180, 151, 0.2);
  border-color: rgba(19, 180, 151, 0.2);
}

.alert-secondary {
  background: #fde1c0;
  border-color: #fde1c0;
  color: #D07407;
}

.alert-secondary {
  background: rgba(208, 116, 7, 0.5);
  border-color: rgba(208, 116, 7, 0.5);
  color: #b7b7b7;
}

.alert-success {
  background: #e7faec;
  border-color: #e7faec;
  color: #2bc155;
}

.alert-success {
  background: rgba(43, 193, 85, 0.1);
  border-color: rgba(43, 193, 85, 0.1);
}

.alert-warning {
  background: #feffe0;
  border-color: #feffe0;
  color: #FAFF00;
}

.alert-warning {
  background: rgba(250, 255, 0, 0.1);
  border-color: rgba(250, 255, 0, 0.1);
}

.alert-danger {
  background: #e19e9e;
  border-color: #e19e9e;
  color: #B03636;
}

.alert-danger {
  background: rgba(176, 54, 54, 0.15);
  border-color: rgba(176, 54, 54, 0.15);
}

.alert-info {
  background: #fefeff;
  border-color: #fefeff;
  color: #3C65F5;
}

.alert-info {
  background: rgba(60, 101, 245, 0.1);
  border-color: rgba(60, 101, 245, 0.1);
}

.alert-dark {
  background: #f5f6f8;
  border-color: #f5f6f8;
  color: #3e4954;
}

.alert-dark {
  background: rgba(62, 73, 84, 0.35);
  border-color: rgba(62, 73, 84, 0.35);
  color: #b7b7b7;
}

.alert-light {
  background: #D1D1D1;
  border-color: #D1D1D1;
  color: #3e4954;
}

.alert-alt.alert-primary {
  border-left: 4px solid #43c4d3;
}

.alert-alt.alert-secondary {
  border-left: 4px solid #D07407;
}

.alert-alt.alert-success {
  border-left: 4px solid #2bc155;
}

.alert-alt.alert-warning {
  border-left: 4px solid #FAFF00;
}

.alert-alt.alert-danger {
  border-left: 4px solid #B03636;
}

.alert-alt.alert-info {
  border-left: 4px solid #3C65F5;
}

.alert-alt.alert-dark {
  border-left: 4px solid #3e4954;
}

.alert-alt.alert-light {
  border-left: 4px solid #ababab;
}

.alert-alt.alert-primary.solid {
  border-left: 4px solid #074136 !important;
}

.alert-alt.alert-secondary.solid {
  border-left: 4px solid #552f03 !important;
}

.alert-alt.alert-success.solid {
  border-left: 4px solid #145927 !important;
}

.alert-alt.alert-warning.solid {
  border-left: 4px solid #7d8000 !important;
}

.alert-alt.alert-danger.solid {
  border-left: 4px solid #4e1818 !important;
}

.alert-alt.alert-info.solid {
  border-left: 4px solid #092ca9 !important;
}

.alert-alt.alert-dark.solid {
  border-left: 4px solid #08090b !important;
}

.alert-alt.alert-light.solid {
  border-left: 4px solid #919191 !important;
}

.alert-dismissible.solid .close:hover {
  color: #fff;
  opacity: 1;
}

.alert.alert-primary.solid {
  background: #43c4d3;
  color: #fff;
  border-color: #43c4d3;
}

.alert.alert-secondary.solid {
  background: #D07407;
  color: #fff;
  border-color: #D07407;
}

.alert.alert-success.solid {
  background: #2bc155;
  color: #fff;
  border-color: #2bc155;
}

.alert.alert-warning.solid {
  background: #FAFF00;
  color: #000;
  border-color: #FAFF00;
}

.alert.alert-danger.solid {
  background: #B03636;
  color: #fff;
  border-color: #B03636;
}

.alert.alert-info.solid {
  background: #3C65F5;
  color: #fff;
  border-color: #3C65F5;
}

.alert.alert-dark.solid {
  background: #3e4954;
  color: #fff;
  border-color: #3e4954;
}

.alert.alert-light.solid {
  background: #D1D1D1;
  color: #3e4954;
  border-color: #D1D1D1;
}

.alert-right-icon>span i {
  font-size: 18px;
  margin-right: 5px;
}

.alert-right-icon .close i {
  font-size: 16px;
}

.alert.alert-outline-primary {
  background: transparent;
  color: #43c4d3;
  border-color: #43c4d3;
}

.alert.alert-outline-secondary {
  background: transparent;
  color: #b7b7b7;
  border-color: #D07407;
}

.alert.alert-outline-success {
  background: transparent;
  color: #2bc155;
  border-color: #2bc155;
}

.alert.alert-outline-info {
  background: transparent;
  color: #3C65F5;
  border-color: #3C65F5;
}

.alert.alert-outline-warning {
  background: transparent;
  color: #FAFF00;
  border-color: #FAFF00;
}

.alert.alert-outline-danger {
  background: transparent;
  color: #B03636;
  border-color: #B03636;
}

.alert.alert-outline-dark {
  background: transparent;
  color: #b7b7b7;
  border-color: #3e4954;
}

.alert.alert-outline-light {
  background: transparent;
  color: #3e4954;
  border-color: #D1D1D1;
}

.alert-social {
  color: #fff;
}

.alert-social .alert-social-icon {
  align-self: center;
  margin-right: 0.9375rem;
}

.alert-social .alert-social-icon i {
  font-size: 42px;
}

.alert-social.facebook {
  background-color: #3b5998;
}

.alert-social.twitter {
  background-color: #1da1f2;
}

.alert-social.linkedin {
  background-color: #007bb6;
}

.alert-social.google-plus {
  background-color: #db4439;
}

.alert-social .close:hover {
  opacity: 1 !important;
  color: #fff !important;
}

.left-icon-big .alert-left-icon-big {
  align-self: center;
  margin-right: 0.9375rem;
}

.left-icon-big .alert-left-icon-big i {
  font-size: 35px;
  line-height: 1;
}

[direction="rtl"] .left-icon-big .alert-left-icon-big,
[direction="rtl"] .alert-social .alert-social-icon {
  margin-left: 0;
  margin-right: 0.9375rem;
}

.badge {
  line-height: 1.5;
  border-radius: 0.75rem;
  padding: 4px 10px;
  border: 1px solid transparent;
}

.badge-rounded {
  border-radius: 20px;
  padding: 3px 13px;
}

.badge-circle {
  border-radius: 100px;
  padding: 3px 7px;
}

.badge-outline-primary {
  border: 1px solid #43c4d3;
  color: #43c4d3;
}

.badge-outline-secondary {
  border: 1px solid #D07407;
  color: #D07407;
}

.badge-outline-secondary {
  color: #b7b7b7;
}

.badge-outline-success {
  border: 1px solid #2bc155;
  color: #2bc155;
}

.badge-outline-info {
  border: 1px solid #3C65F5;
  color: #3C65F5;
}

.badge-outline-warning {
  border: 1px solid #FAFF00;
  color: #FAFF00;
}

.badge-outline-danger {
  border: 1px solid #B03636;
  color: #B03636;
}

.badge-outline-light {
  border: 1px solid #d7dae3;
  color: #3e4954;
}

.badge-outline-light {
  color: #b7b7b7;
}

.badge-outline-dark {
  border: 1px solid #3e4954;
  color: #3e4954;
}

.badge-outline-dark {
  color: #b7b7b7;
}

.badge-xs {
  font-size: 10px;
  padding: 0px 5px;
  line-height: 18px;
}

.badge-sm {
  font-size: 11px;
  padding: 5px 8px;
  line-height: 11px;
}

.badge-lg {
  font-size: 14px;
  padding: 0px 10px;
  line-height: 30px;
}

.badge-xl {
  font-size: 15px;
  padding: 0px 15px;
  line-height: 35px;
}

.badge-default {
  background: #ADB6C7;
}

.badge-success {
  background-color: #2bc155;
}

.badge-info {
  background-color: #3C65F5;
}

.badge-primary {
  background-color: #43c4d3;
}

.badge-warning {
  background-color: #FAFF00;
}

.badge-danger {
  background-color: #B03636;
}

.badge-dark {
  background-color: #3e4954;
}

.badge-light {
  background-color: #D1D1D1;
}

.light.badge-default {
  background: #ADB6C7;
}

.light.badge-success {
  background-color: #e7faec;
  color: #2bc155;
}

.light.badge-success {
  background-color: rgba(43, 193, 85, 0.1);
}

.light.badge-info {
  background-color: #fefeff;
  color: #3C65F5;
}

.light.badge-info {
  background-color: rgba(60, 101, 245, 0.1);
}

.light.badge-primary {
  background-color: #b5f7eb;
  color: #43c4d3;
}

.light.badge-primary {
  background-color: rgba(19, 180, 151, 0.2);
}

.light.badge-secondary {
  background-color: #fde1c0;
  color: #D07407;
}

.light.badge-secondary {
  background-color: rgba(208, 116, 7, 0.5);
  color: #b7b7b7;
}

.light.badge-warning {
  background-color: #feffe0;
  color: #FAFF00;
}

.light.badge-warning {
  background-color: rgba(250, 255, 0, 0.1);
}

.light.badge-danger {
  background-color: #e19e9e;
  color: #B03636;
}

.light.badge-danger {
  background-color: rgba(176, 54, 54, 0.15);
}

.light.badge-dark {
  background-color: #f5f6f8;
  color: #3e4954;
}

.light.badge-dark {
  background-color: rgba(62, 73, 84, 0.35);
  color: #b7b7b7;
}

.bootstrap-label .label {
  display: inline-block;
  margin-right: 1rem;
}

.bootstrap-label .label:last-child {
  margin-right: 0;
}

.badge-demo .badge {
  margin-right: 5px;
  margin-bottom: 5px;
}

.badge-demo .badge:last-child {
  margin-right: 0;
}

.bootstrap-badge-buttons button {
  margin-right: .2rem;
  margin-bottom: 1rem;
}

.bootstrap-badge-buttons button:last-child {
  margin-right: 0;
}

.page-titles {
  background: transparent;
  margin-bottom: 30px;
  border-radius: 5px;
  margin-left: -40px;
  margin-right: -40px;
  padding: 20px 40px;
  margin-top: -40px;
  border-radius: 0;
}

.page-titles {
  background: #2f363e;
}

@media only screen and (max-width: 1400px) {
  .page-titles {
      margin-top: -30px;
  }
}

@media only screen and (max-width: 767px) {
  .page-titles {
      margin-bottom: 15px;
      margin-top: -20px;
  }
}

@media only screen and (max-width: 575px) {
  .page-titles {
      margin-top: -15px;
  }
}

.page-titles .justify-content-sm-end {
  align-items: center;
}

.page-titles h4 {
  margin-bottom: 0;
  margin-top: 0;
  color: #43c4d3;
  font-size: 1.25rem;
}

.page-titles h4 span {
  font-size: 0.875rem;
  font-weight: 400;
}

.page-titles .breadcrumb {
  margin-bottom: 0;
  padding: 0;
  background: transparent;
}

.page-titles .breadcrumb li {
  margin-top: 0;
  margin-bottom: 0;
}

.page-titles .breadcrumb li a {
  color: #828690;
}

.page-titles .breadcrumb li.active a {
  color: #43c4d3;
}

.page-titles .breadcrumb li:before {
  color: #43c4d3;
}

.page-titles .breadcrumb-datepicker {
  font-size: 0.75rem;
  color: #89879f;
}

.page-titles .breadcrumb-datepicker__icon {
  font-size: 0.875rem;
}

.page-titles .breadcrumb-widget .border-dark {
  border-color: #dee2e6 !important;
}

.page-titles .breadcrumb-widget h4 {
  color: #646c9a;
  font-weight: 600;
}

@media only screen and (max-width: 575px) {
  .page-titles .breadcrumb-widget {
      text-align: left !important;
      margin-bottom: 0.9375rem;
  }
}

button {
  cursor: pointer;
}

button:focus {
  outline: 0;
  box-shadow: none;
}

.btn {
  padding: 0.538rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.btn:hover,
.btn:focus,
.btn:active,
.btn.active {
  outline: 0 !important;
}

@media only screen and (max-width: 1400px) {
  .btn {
      padding: 0.625rem 1rem;
      font-size: 0.813rem;
      margin-bottom: 0;
  }
}

.btn-transparent {
  background-color: transparent;
}

.sharp {
  min-width: 40px;
  padding: 7px;
  height: 40px;
  min-height: 40px;
}

.sharp.btn-xs {
  padding: 3px;
  width: 26px;
  height: 26px;
  min-width: 26px;
  min-height: 26px;
}

.light.tp-btn {
  background-color: transparent;
}

.light.btn-default {
  background: #ADB6C7;
}

.light.btn-success {
  background-color: #e7faec;
  border-color: #e7faec;
  color: #2bc155;
}

.light.btn-success g [fill] {
  fill: #2bc155;
}

.light.btn-success {
  background-color: rgba(43, 193, 85, 0.1);
  border-color: transparent;
}

.light.btn-success:hover {
  background-color: #2bc155;
  border-color: #2bc155;
  color: #fff;
}

.light.btn-success:hover g [fill] {
  fill: #fff;
}

.light.btn-info {
  background-color: #fefeff;
  border-color: #fefeff;
  color: #3C65F5;
}

.light.btn-info g [fill] {
  fill: #3C65F5;
}

.light.btn-info {
  background-color: rgba(60, 101, 245, 0.1);
  border-color: transparent;
}

.light.btn-info:hover {
  background-color: #3C65F5;
  border-color: #3C65F5;
  color: #fff;
}

.light.btn-info:hover g [fill] {
  fill: #fff;
}

.light.btn-primary {
  background-color: #b5f7eb;
  border-color: #b5f7eb;
  color: #43c4d3;
}

.light.btn-primary g [fill] {
  fill: #43c4d3;
}

.light.btn-primary {
  background-color: rgba(19, 180, 151, 0.2);
  border-color: transparent;
}

.light.btn-primary:hover {
  background-color: #43c4d3;
  border-color: #43c4d3;
  color: #fff;
}

.light.btn-primary:hover g [fill] {
  fill: #fff;
}

.light.btn-secondary {
  background-color: #fde1c0;
  border-color: #fde1c0;
  color: #D07407;
}

.light.btn-secondary g [fill] {
  fill: #D07407;
}

.light.btn-secondary {
  background-color: rgba(208, 116, 7, 0.5);
  border-color: transparent;
  color: #fff;
}

.light.btn-secondary:hover {
  background-color: #D07407;
  border-color: #D07407;
  color: #fff;
}

.light.btn-secondary:hover g [fill] {
  fill: #fff;
}

.light.btn-warning {
  background-color: #feffe0;
  border-color: #feffe0;
  color: #FAFF00;
}

.light.btn-warning g [fill] {
  fill: #FAFF00;
}

.light.btn-warning {
  background-color: rgba(250, 255, 0, 0.1);
  border-color: transparent;
}

.light.btn-warning:hover {
  background-color: #FAFF00;
  border-color: #FAFF00;
  color: #fff;
}

.light.btn-warning:hover g [fill] {
  fill: #fff;
}

.light.btn-danger {
  background-color: #e19e9e;
  border-color: #e19e9e;
  color: #B03636;
}

.light.btn-danger g [fill] {
  fill: #B03636;
}

.light.btn-danger {
  background-color: rgba(176, 54, 54, 0.15);
  border-color: transparent;
}

.light.btn-danger:hover {
  background-color: #B03636;
  border-color: #B03636;
  color: #fff;
}

.light.btn-danger:hover g [fill] {
  fill: #fff;
}

.light.btn-dark {
  background-color: #f5f6f8;
  border-color: #f5f6f8;
  color: #3e4954;
}

.light.btn-dark g [fill] {
  fill: #3e4954;
}

.light.btn-dark {
  background-color: rgba(62, 73, 84, 0.35);
  border-color: transparent;
  color: #fff;
}

.light.btn-dark:hover {
  background-color: #3e4954;
  border-color: #3e4954;
  color: #fff;
}

.light.btn-dark:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn {
  background-color: transparent;
  border-color: transparent;
}

.btn.tp-btn.btn-default {
  background: #ADB6C7;
}

.btn.tp-btn.btn-success {
  color: #2bc155;
}

.btn.tp-btn.btn-success g [fill] {
  fill: #2bc155;
}

.btn.tp-btn.btn-success:hover {
  background-color: #2bc155;
  border-color: #2bc155;
  color: #fff;
}

.btn.tp-btn.btn-success:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn.btn-info {
  color: #3C65F5;
}

.btn.tp-btn.btn-info g [fill] {
  fill: #3C65F5;
}

.btn.tp-btn.btn-info:hover {
  background-color: #3C65F5;
  border-color: #3C65F5;
  color: #fff;
}

.btn.tp-btn.btn-info:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn.btn-primary {
  color: #43c4d3;
}

.btn.tp-btn.btn-primary g [fill] {
  fill: #43c4d3;
}

.btn.tp-btn.btn-primary:hover {
  background-color: #43c4d3;
  border-color: #43c4d3;
  color: #fff;
}

.btn.tp-btn.btn-primary:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn.btn-secondary {
  color: #D07407;
}

.btn.tp-btn.btn-secondary g [fill] {
  fill: #D07407;
}

.btn.tp-btn.btn-secondary:hover {
  background-color: #D07407;
  border-color: #D07407;
  color: #fff;
}

.btn.tp-btn.btn-secondary:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn.btn-warning {
  color: #FAFF00;
}

.btn.tp-btn.btn-warning g [fill] {
  fill: #FAFF00;
}

.btn.tp-btn.btn-warning:hover {
  background-color: #FAFF00;
  border-color: #FAFF00;
  color: #fff;
}

.btn.tp-btn.btn-warning:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn.btn-danger {
  color: #B03636;
}

.btn.tp-btn.btn-danger g [fill] {
  fill: #B03636;
}

.btn.tp-btn.btn-danger:hover {
  background-color: #B03636;
  border-color: #B03636;
  color: #fff;
}

.btn.tp-btn.btn-danger:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn.btn-light {
  color: #3e4954;
}

.btn.tp-btn.btn-light g [fill] {
  fill: #3e4954;
}

.btn.tp-btn.btn-light:hover {
  background-color: #D1D1D1;
  border-color: #D1D1D1;
  color: #3e4954;
}

.btn.tp-btn.btn-light:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn.btn-dark {
  color: #3e4954;
}

.btn.tp-btn.btn-dark g [fill] {
  fill: #3e4954;
}

.btn.tp-btn.btn-dark:hover {
  background-color: #3e4954;
  border-color: #3e4954;
  color: #fff;
}

.btn.tp-btn.btn-dark:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn-light {
  background-color: transparent;
  border-color: transparent;
}

.btn.tp-btn-light.btn-success {
  color: #2bc155;
}

.btn.tp-btn-light.btn-success g [fill] {
  fill: #2bc155;
}

.btn.tp-btn-light.btn-success:hover {
  background-color: #e7faec;
  border-color: #e7faec;
  color: #2bc155;
}

.btn.tp-btn-light.btn-success:hover g [fill] {
  fill: #2bc155;
}

.btn.tp-btn-light.btn-info {
  color: #3C65F5;
}

.btn.tp-btn-light.btn-info g [fill] {
  fill: #3C65F5;
}

.btn.tp-btn-light.btn-info:hover {
  background-color: #fefeff;
  border-color: #fefeff;
  color: #3C65F5;
}

.btn.tp-btn-light.btn-info:hover g [fill] {
  fill: #3C65F5;
}

.btn.tp-btn-light.btn-primary {
  color: #43c4d3;
}

.btn.tp-btn-light.btn-primary g [fill] {
  fill: #43c4d3;
}

.btn.tp-btn-light.btn-primary:hover {
  background-color: #b5f7eb;
  border-color: #b5f7eb;
  color: #43c4d3;
}

.btn.tp-btn-light.btn-primary:hover g [fill] {
  fill: #43c4d3;
}

.btn.tp-btn-light.btn-secondary {
  color: #D07407;
}

.btn.tp-btn-light.btn-secondary g [fill] {
  fill: #D07407;
}

.btn.tp-btn-light.btn-secondary:hover {
  background-color: #fde1c0;
  border-color: #fde1c0;
  color: #D07407;
}

.btn.tp-btn-light.btn-secondary:hover g [fill] {
  fill: #D07407;
}

.btn.tp-btn-light.btn-warning {
  color: #FAFF00;
}

.btn.tp-btn-light.btn-warning g [fill] {
  fill: #FAFF00;
}

.btn.tp-btn-light.btn-warning:hover {
  background-color: #feffe0;
  border-color: #feffe0;
  color: #FAFF00;
}

.btn.tp-btn-light.btn-warning:hover g [fill] {
  fill: #FAFF00;
}

.btn.tp-btn-light.btn-danger {
  color: #B03636;
}

.btn.tp-btn-light.btn-danger g [fill] {
  fill: #B03636;
}

.btn.tp-btn-light.btn-danger:hover {
  background-color: #e19e9e;
  border-color: #e19e9e;
  color: #B03636;
}

.btn.tp-btn-light.btn-danger:hover g [fill] {
  fill: #fff;
}

.btn.tp-btn-light.btn-dark {
  color: #3e4954;
}

.btn.tp-btn-light.btn-dark g [fill] {
  fill: #3e4954;
}

.btn.tp-btn-light.btn-dark:hover {
  background-color: #f5f6f8;
  border-color: #f5f6f8;
  color: #3e4954;
}

.btn.tp-btn-light.btn-dark:hover g [fill] {
  fill: #fff;
}

.shadow.btn-primary {
  -webkit-box-shadow: 0 5px 15px 0 rgba(19, 180, 151, 0.2) !important;
  box-shadow: 0 5px 15px 0 rgba(19, 180, 151, 0.2) !important;
}

.shadow.btn-secondary {
  -webkit-box-shadow: 0 5px 15px 0 rgba(208, 116, 7, 0.2) !important;
  box-shadow: 0 5px 15px 0 rgba(208, 116, 7, 0.2) !important;
}

.shadow.btn-warning {
  -webkit-box-shadow: 0 5px 15px 0 rgba(250, 255, 0, 0.2) !important;
  box-shadow: 0 5px 15px 0 rgba(250, 255, 0, 0.2) !important;
}

.shadow.btn-danger {
  -webkit-box-shadow: 0 5px 15px 0 rgba(176, 54, 54, 0.2) !important;
  box-shadow: 0 5px 15px 0 rgba(176, 54, 54, 0.2) !important;
}

.shadow.btn-info {
  -webkit-box-shadow: 0 5px 15px 0 rgba(60, 101, 245, 0.2) !important;
  box-shadow: 0 5px 15px 0 rgba(60, 101, 245, 0.2) !important;
}

.shadow.btn-success {
  -webkit-box-shadow: 0 5px 15px 0 rgba(43, 193, 85, 0.2) !important;
  box-shadow: 0 5px 15px 0 rgba(43, 193, 85, 0.2) !important;
}

.btn-xxs {
  padding: 6px 15px;
  font-size: 11px;
  line-height: 1.3;
}

.btn-xs {
  font-size: 0.75rem;
  padding: 0.438rem 1rem;
  font-weight: 600;
}

.btn-sm,
.btn-group-sm>.btn {
  font-size: 0.813rem !important;
  padding: 0.625rem 1rem;
}

.btn-md {
  font-size: 15px;
  padding: 7px;
  /* min-width: 145px; */
  display: flex;
  /* border: 2px solid #8b8484; */
  background-color: #090d13;
  align-items: center;
  /* justify-content: space-between; */
}

.btn-white {
  font-size: 14px;
  padding: 10px 26px;
  /* min-width: 145px; */
  display: flex;
  border: 2px solid #ffffff;
  background-color: transparent;
  color: #ffffff;
  align-items: center;
  /* justify-content: space-between; */
}

.btn-lg,
.btn-group-lg>.btn {
  padding: 15px 30px;
  font-size: 15px;
}

@media only screen and (max-width: 575px) {
  .btn-lg,
  .btn-group-lg>.btn {
      padding: 0.75rem 1.25rem;
      font-size: 0.7rem !important;
  }
}

.btn-xl {
  padding: 0.6rem 1rem;
}

.btn-xl.btn-default {
  font-weight: 600;
}

.btn-square {
  border-radius: 0;
}

.btn-rounded {
  border-radius: 30px !important;
}

.btn-icon-right {
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-block;
  margin: -.8rem 0 -.8rem 1rem;
  padding: 0.4375rem 0 0.4375rem 1rem;
  margin: -1rem -0.25rem -1rem 1rem;
  padding: 1rem 0 1rem 1.25rem;
}

.btn-icon-left {
  background: #fff;
  border-radius: 10rem;
  display: inline-block;
  margin: -0.5rem 0.75rem -0.5rem -1.188rem;
  padding: 0.5rem 0.80rem 0.5rem;
  float: left;
}

@media only screen and (max-width: 1199px) {
  .btn-icon-left {
      margin: -0.5rem 0.75rem -0.5rem -0.800rem;
  }
}


.toggle-dropdown::after {
  margin-left: 0.755em;
}

.social-btn-icon .btn {
  min-width: 7.5rem;
  margin-bottom: 1.5rem;
}

.social-icon .btn {
  padding: .7rem 1.4rem;
}

.btn-circle {
  height: 5rem;
  width: 5rem;
  border-radius: 50% !important;
}

.btn-circle-sm {
  width: 4.5rem;
  height: 4.5rem;
  font-size: 1.8rem;
}

.btn-circle-md {
  width: 6rem;
  height: 6rem;
  font-size: 2.5rem;
}

.btn-circle-md i {
  font-size: 2.4rem;
}

.btn-circle-lg {
  width: 8rem;
  height: 8rem;
  font-size: 3.2rem;
}

.btn-circle-lg i {
  font-size: 3.1rem;
}

.btn-page .btn {
  min-width: 110px;
  margin-right: 4px;
  margin-bottom: 8px;
}

.size-1 {
  min-width: 160px !important;
  font-size: 24px;
  padding: 0.68rem 0.75rem;
}

.size-2 {
  font-size: 20px;
  min-width: 130px !important;
  padding: 0.57rem 0.75rem;
}

.size-3 {
  font-size: 14px;
  min-width: 110px !important;
  padding: 0.536rem 0.75rem;
}

.size-4 {
  font-size: 14px;
  min-width: 100px !important;
}

.size-5 {
  font-size: 14px;
  min-width: 90px !important;
  padding: .22rem 0.75rem;
}

.size-6 {
  font-size: 13px;
  min-width: 80px !important;
  padding: 0.097rem 0.75rem;
}

.size-7 {
  font-size: 12px;
  min-width: 60px !important;
  padding: 0.001rem 0.75rem;
}

.btn-light {
  background: #D1D1D1;
  border-color: #D1D1D1;
}

.btn-light:active,
.btn-light:focus,
.btn-light:hover {
  background: white;
  color: #3e4954;
  border-color: white;
}

.btn-outline-light {
  color: #3e4954;
}

.btn-outline-light {
  color: #b7b7b7;
}

.btn-outline-secondary {
  color: #b7b7b7;
}

.btn-outline-dark {
  color: #b7b7b7;
}

.btn-dark {
  background: #3e4954;
  border-color: #3e4954;
  color: #fff!important;
  font-size: 14px;
}

.btn-dark:active,
.btn-dark:focus,
.btn-dark:hover {
  background: #283037;
  color: #fff;
  border-color: #283037;
}

.btn-group.btn-rounded .btn:first-child {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.btn-group.btn-rounded .btn:last-child {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
}



.card {
  background-color: rgb(16 14 21);
  transition: all .5s ease-in-out;
  position: relative;
  border: 0px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0px 12px 33px 0px rgb(62 73 84 / 8%);
  padding: 20px;
z-index: 0;}

@media only screen and (max-width: 575px) {
  .card {
      margin-bottom: 0.938rem;
      /* height: calc(100% - 0.938rem); */
  }
}

.card-body {
  padding: 0.5rem;
}

@media only screen and (max-width: 575px) {
  .card-body {
      padding: 0rem;
  }
}

.card-title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
  text-transform: capitalize;
}

.card-title--large {
  font-size: 1.5rem;
}

.card-title--medium {
  font-size: 1rem;
}

.card-title--small {
  font-size: 0.875rem;
}

.card-header {
  position: relative;
  background: transparent;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  
  width: 100%;
align-items: baseline;flex-direction: row;}

@media only screen and (max-width: 575px) {
  .card-header {
      padding: 0.8rem 0.8rem;
  }
}

.card-header {
  border-color: #3e454d;
}

.card-header .card-title {
  margin-bottom: 0px;
}

.card-header .subtitle {
  padding-top: 5px;
  font-size: 14px;
  line-height: 1.5;
}

.card-footer {
  border-color: #d7dae3;
  background: #16161e;
  padding: 1.25rem 1.875rem 1.25rem;
}

.card-footer {
  border-color: #3e454d;
}

.transparent-card.card {
  background: transparent;
  border: 1px solid transparent;
  box-shadow: none;
}

.card-action>a {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  border-color: transparent;
  text-align: center;
  background: black;
  color: #fff;
  margin-right: 8px;
}

.card-action>a {
  background: #24292d;
}

.card-action>a:last-child {
  margin-right: 0;
}

.card-action>a:hover,
.card-action>a:focus {
  background: black;
}

.card-action>a:hover,
.card-action>a:focus {
  background: #24292d;
}

.card-action>a i,
.card-action>a span {
  font-size: 1rem;
}

.card-action .dropdown {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border-color: transparent;
  text-align: center;
  margin-right: 8px;
  top: -2px;
  position: relative;
  display: inline-block;
  background: black;
  color: #43c4d3;
}

.card-action .dropdown {
  background: #24292d;
}

.card-action .dropdown:hover,
.card-action .dropdown:focus {
  background: black;
}

.card-action .dropdown:hover,
.card-action .dropdown:focus {
  background: #24292d;
}

.card-action .dropdown .btn {
  padding: 0;
  line-height: 27px;
  color: #fff;
}

.card-action .dropdown .btn:focus {
  box-shadow: none;
}

.card-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999999;
  overflow: auto;
}

.card-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999;
}

.card-loader i {
  margin: 0 auto;
  background: #10947c;
  padding: 10px;
  border-radius: 50%;
  color: #fff;
  font-size: 1rem;
}

.rotate-refresh {
  -webkit-animation: mymove 0.8s infinite linear;
  animation: mymove 0.8s infinite linear;
  display: inline-block;
}

.card-header .date_picker {
  display: inline-block;
  padding: 8px;
  border: 1px solid #d7dae3;
  cursor: pointer;
  border-radius: .375rem;
}

.card-header .border-0 {
  padding-bottom: 0;
}

@-webkit-keyframes mymove {
  0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}

@keyframes mymove {
  0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
  }
}

.dropdown-toggle:focus {
  box-shadow: none !important;
}

.dropdown-outline {
  border: 0.1rem solid #43c4d3;
}

.dropdown-menu {
  font-size: inherit;
  border: 0;
  box-shadow: 0 10px 40px 0 rgba(32, 28, 69, 0.1);
  margin-top: 0;
}

.dropdown-menu .dropdown-item {
  font-size: 16px;
  color: #b7b7b7;
  padding: 0.5rem 1.75rem;
}

@media only screen and (max-width: 1400px) {
  .dropdown-menu .dropdown-item {
      padding: 0.375rem 1rem;
      font-size: 14px;
  }
}

.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus,
.dropdown-menu .dropdown-item:active,
.dropdown-menu .dropdown-item.active {
  color: #514e5f;
  background: #f8f9fa;
}

[direction="rtl"] .dropdown-menu {
  right: auto !important;
}

.dropdown-toggle-split {
  padding: 0 10px;
  opacity: 0.85;
}

.dropdown-toggle-split:after {
  margin-left: 0 !important;
}

.dropdown-toggle-split:active,
.dropdown-toggle-split:focus,
.dropdown-toggle-split:hover {
  opacity: 1;
}

.dropleft .dropdown-toggle:before,
.dropright .dropdown-toggle:before,
.dropup .dropdown-toggle:after,
.dropdown-toggle:after {
  content: "\f0d7";
  font-family: FontAwesome;
  border: 0;
  vertical-align: middle;
  margin-left: 0.5em;
  line-height: 1;
  font-size: 1.05rem;
}

.dropup .dropdown-toggle:after {
  content: "\f106";
}

.dropleft .dropdown-toggle::before {
  content: "\f104";
}

.dropright .dropdown-toggle::before {
  content: "\f105";
}

.dropright .dropdown-toggle::after {
  content: none;
}

.custom-dropdown {
  display: inline-block;
  margin-bottom: 1rem;
}

.custom-dropdown .dropdown-menu {
  border: 0px;
  min-width: 160px;
}

.card-action .custom-dropdown {
  margin: 0px;
  background: #70f0d9;
}

.card-action .custom-dropdown.show,
.card-action .custom-dropdown:focus,
.card-action .custom-dropdown:hover {
  background: #43c4d3;
  color: #fff;
}

.card-action .custom-dropdown i {
  display: inline-block;
  padding-top: 9px;
}

.dropdown .dropdown-dots {
  position: relative;
  height: 5px;
  width: 5px;
  background: rgba(62, 73, 84, 0.4);
  border-radius: 5px;
  display: block;
}

.dropdown .dropdown-dots:after,
.dropdown .dropdown-dots:before {
  content: "";
  height: 5px;
  width: 5px;
  background: rgba(62, 73, 84, 0.4);
  position: absolute;
  border-radius: 5px;
}

.dropdown .dropdown-dots:after {
  right: -8px;
}

.dropdown .dropdown-dots:before {
  left: -8px;
}

.dropdown .dropdown-dots.text-white {
  background: rgba(255, 255, 255, 0.7);
}

.dropdown .dropdown-dots.text-white:after,
.dropdown .dropdown-dots.text-white:before {
  background: rgba(255, 255, 255, 0.7);
}

.grid-col {
  padding: 0.5rem !important;
  background: #f6f6f6;
}

.row.grid {
  margin-bottom: 1.5rem;
  text-align: center;
}

.row.grid .grid-col:first-child {
  text-align: left;
}

.label {
  display: inline-block;
  text-align: center;
  font-size: 0.75rem;
  padding: .2rem .8rem;
}

.label-fixed {
  width: 7.5rem;
  padding: .6rem 0;
}

.label-fixed-lg {
  width: 9.5rem;
  padding: .6rem 0;
}

.label-big {
  width: 16.8rem;
  font-size: 1.4rem;
  padding: 1.1rem 0;
}

.label-xl {
  width: 10.5rem;
  padding: 1.1rem 0;
  font-size: 1.5rem;
}

.label-lg {
  width: 9.5rem;
  padding: 1.1rem 0;
}

.label-md {
  width: 8.5rem;
  padding: 1.1rem 0;
}

.label-sm {
  width: 7.5rem;
  padding: 1.1rem 0;
}

.label-default {
  background: #ADB6C7;
}

.label-primary {
  background: #43c4d3;
  color: #fff;
}

.label-secondary {
  background: #D07407;
  color: #fff;
}

.label-info {
  background: #3C65F5;
  color: #fff;
}

.label-success {
  background: #2bc155;
  color: #fff;
}

.label-warning {
  background: #FAFF00;
  color: #fff;
}

.label-danger {
  background: #B03636;
  color: #fff;
}

.label-light {
  background: #D1D1D1;
  color: #000;
}

.label-dark {
  background: #3e4954;
  color: #fff;
}

code {
  word-break: break-word;
  padding: 2px 5px;
  border-radius: 3px;
  background: #e5aaaa;
  color: #B03636;
}

code {
  background: rgba(176, 54, 54, 0.1);
}

.heading-labels {
  color: #333333;
}

.heading-labels>* {
  margin-bottom: .8rem;
}

.heading-labels h1 .label {
  font-size: 18px;
  font-weight: normal;
  padding: .4rem .9rem;
}

.heading-labels h2 .label {
  font-size: 16px;
  font-weight: normal;
  padding: 0.3rem .9rem;
}

.heading-labels h3 .label {
  font-size: 14px;
  font-weight: normal;
}

.heading-labels h4 .label {
  font-size: 12px;
  font-weight: normal;
}

.heading-labels h5 .label {
  font-size: 12px;
  font-weight: normal;
}

.heading-labels h6 .label {
  font-size: 12px;
  font-weight: normal;
}

.list-group-item {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid #d7dae3;
  padding: 1rem 1.5rem;
}

.list-group-item {
  border-color: #3e454d;
}

.list-group-item.disabled,
.list-group-item:disabled {
  color: #fff;
  background-color: #D07407;
  border-color: #D07407;
}

[class*="bg-"] .list-group-item {
  border-color: rgba(255, 255, 255, 0.05);
}

.bg-warning .list-group-item {
  border-color: rgba(0, 0, 0, 0.05);
}

.media img {
  border-radius: 3px;
}

.vertical-card__menu:hover {
  box-shadow: none;
}

.vertical-card__menu--image {
  text-align: center;
}

.vertical-card__menu--image img {
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.vertical-card__menu--status.closed {
  background: #B03636;
}

.vertical-card__menu--status.closed:after {
  border-top: 10px solid #B03636;
}

.vertical-card__menu--status.closed .ribbon-curve {
  border-top: 11px solid #B03636;
  border-bottom: 10px solid #B03636;
}

.vertical-card__menu--desc p {
  margin-bottom: 0.625rem;
}

.vertical-card__menu--price {
  font-size: 1.25rem;
  margin: 0;
  font-weight: 700;
}

.vertical-card__menu--rating {
  font-size: 0.75rem;
}

.vertical-card__menu--title {
  font-weight: 700;
}

.vertical-card__menu--button button {
  font-size: 0.75rem;
}

.vertical-card__menu .card-footer {
  padding: 15px 20px;
  background-color: #d7dae3;
  border-top: none;
}

@media only screen and (min-width: 1200px) and (max-width: 1440px) {
  .vertical-card__menu .card-footer {
      padding: 15px;
  }
}

.vertical-card__menu .card-footer span {
  color: #3e4954;
  margin-right: 0.3125rem;
}

.horizontal-card__menu {
  box-shadow: 0 0 7px rgba(173, 173, 173, 0.32);
  display: flex;
  flex-direction: row;
}

@media (max-width: 575.98px) {
  .horizontal-card__menu {
      display: block;
  }
}

.horizontal-card__menu .card-body {
  padding: 0;
  padding: 20px 30px;
}

.horizontal-card__menu--image {
  flex-basis: 30%;
  max-width: 30%;
}

.horizontal-card__menu--image img {
  height: 100%;
  width: 100%;
}

@media (max-width: 575.98px) {
  .horizontal-card__menu--image {
      max-width: unset;
      flex-basis: 100%;
  }
}

.horizontal-card__menu--title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.3125rem;
}

.horizontal-card__menu--fav {
  margin-right: 0.5rem;
}

.horizontal-card__menu--price {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
}

.horizontal-card__menu--rating {
  font-size: 0.625rem;
}

.horizontal-card__menu--footer {
  margin-top: 10px;
}

.prev_price {
  text-decoration: line-through;
  font-size: 80%;
  opacity: 0.5;
}

.modal-header {
  padding: 1rem 1.875rem;
}

.modal-header .close {
  padding: 0.875rem 1.815rem;
  margin: 0;
  position: absolute;
  right: 0;
  float: none;
  top: 0;
  font-size: 30px;
  font-weight: 100;
}

.modal-body {
  padding: 25px;
}


.modal-content {
  border-radius: 0.75rem;
}

.modal-backdrop {
  z-index: 10 !important;
}



.nav-pills .nav-link {
  border-radius: 0.75rem;
  padding: 0.75rem 1.25rem;
}

.default-tab .nav-link {
  background: transparent;
  border-radius: 0px;
  font-weight: 500;
}

.default-tab .nav-link i {
  display: inline-block;
  transform: scale(1.5);
  color: #43c4d3;
}

.default-tab .nav-link:focus,
.default-tab .nav-link:hover,
.default-tab .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff #ebeef6;
  border-radius: 0.75rem 0.75rem 0 0;
  color: #43c4d3;
}

.default-tab .nav-link:focus,
.default-tab .nav-link:hover,
.default-tab .nav-link.active {
  background-color: rgba(19, 180, 151, 0.2);
  border-color: transparent transparent #3e454d transparent;
}

.custom-tab-1 .nav-link {
  background: transparent;
  border-radius: 0px;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  border-width: 0 0px 3px 0;
}

.custom-tab-1 .nav-link i {
  display: inline-block;
  transform: scale(1.5);
  color: #43c4d3;
}

.custom-tab-1 .nav-link:focus,
.custom-tab-1 .nav-link:hover,
.custom-tab-1 .nav-link.active {
  color: #495057;
  background-color: #fff;
  border-color: #43c4d3;
  border-radius: 0;
  color: #43c4d3;
  border-width: 0 0px 3px 0;
}

.custom-tab-1 .nav-link:focus,
.custom-tab-1 .nav-link:hover,
.custom-tab-1 .nav-link.active {
  background-color: rgba(19, 180, 151, 0.2);
}

.nav-pills.light .nav-link.active,
.nav-pills.light .show>.nav-link {
  background: #b5f7eb;
  color: #43c4d3;
  box-shadow: none;
}

.nav-pills.light .nav-link.active,
.nav-pills.light .show>.nav-link {
  background: rgba(19, 180, 151, 0.2);
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  box-shadow: 0 0 20px 0 rgba(19, 180, 151, 0.2);
}

.card-list {
  overflow: unset;
  height: calc(100% - 50px);
}

.card-list .card-header {
  padding-top: 0;
  padding-bottom: 0;
}

.card-list .card-header .photo {
  overflow: hidden;
  border-radius: 5px;
  width: 100%;
}

@media only screen and (max-width: 1199px) {
  .card-list {
      height: calc(100% - 40px);
  }
}

.card-list.list-left {
  margin-top: 15px;
  margin-left: 15px;
}

.card-list.list-left .card-header {
  padding-left: 0;
}

.card-list.list-left .card-header .photo {
  margin: -15px 15px 0 -15px;
}

.card-list.list-right {
  margin-top: 15px;
  margin-right: 15px;
  text-align: right;
}

.card-list.list-right .card-header {
  padding-right: 0;
}

.card-list.list-right .card-header .photo {
  margin: -15px -15px 0 15px;
}

.card-list.list-right .card-header .photo img {
  width: 100%;
}

.card-list.list-center {
  margin-top: 15px;
}

.card-list.list-center .card-header .photo {
  margin: -15px 0 0 0;
}

.card-list .photo img {
  width: 100%;
}

.card-profile .profile-photo {
  margin-top: -20px;
}

.widget-media .timeline .timeline-panel {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.widget-media .timeline .timeline-panel .media {
  width: 50px;
  height: 50px;
  background: #eee;
  border-radius: 12px;
  overflow: hidden;
  font-size: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  align-self: start;
}

.widget-media .timeline .timeline-panel .media-primary {
  background: #b5f7eb;
  color: #43c4d3;
}

.widget-media .timeline .timeline-panel .media-primary {
  background-color: rgba(19, 180, 151, 0.2);
}

.widget-media .timeline .timeline-panel .media-info {
  background: #fefeff;
  color: #3C65F5;
}

.widget-media .timeline .timeline-panel .media-info {
  background-color: rgba(60, 101, 245, 0.1);
}

.widget-media .timeline .timeline-panel .media-warning {
  background: #feffe0;
  color: #FAFF00;
}

.widget-media .timeline .timeline-panel .media-warning {
  background-color: rgba(250, 255, 0, 0.1);
}

.widget-media .timeline .timeline-panel .media-danger {
  background: #e19e9e;
  color: #B03636;
}

.widget-media .timeline .timeline-panel .media-danger {
  background-color: rgba(176, 54, 54, 0.15);
}

.widget-media .timeline .timeline-panel .media-success {
  background: #e7faec;
  color: #2bc155;
}

.widget-media .timeline .timeline-panel .media-success {
  background-color: rgba(43, 193, 85, 0.1);
}

.widget-media .timeline .timeline-panel .media-body p {
  font-size: 14px;
  line-height: 1.5;
}

.widget-media .timeline .timeline-panel .dropdown {
  align-self: self-end;
  margin-top: 5px;
}

.widget-media .timeline li:last-child .timeline-panel {
  margin-bottom: 0;
  border-bottom: 0;
  padding-bottom: 0;
}

.card[class*="bg-"] .timeline .timeline-panel {
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.table {
  color: strong;
  color-color: #3e4954;
}

.table th {
  padding: 15px;
  border-bottom: 1px solid rgba(215, 218, 227, 0.3);
  border-top: none;
font-size: 16px;}

@media only screen and (max-width: 767px) {
  .table th {
      padding: 10px 15px;
  }
}

.table th {
  border-color: #3e454d;
}

.table td {
  padding: 15px;
  border-color: rgba(215, 218, 227, 0.5);
  border-bottom: 1px solid;
  border-top: none;
font-size: 14px;}

@media only screen and (max-width: 767px) {
  .table td {
      padding: 10px 15px;
  }
}

.table td {
  border-color: #3e454d;
}

.table.table-striped tbody tr:nth-of-type(odd),
.table.table-hover tr:hover {
  background-color: #f6f6f6;
}

.table.table-striped tbody tr:nth-of-type(odd),
.table.table-hover tr:hover {
  background-color: #24292d;
}

.table thead {
  background: #2D3640;
  box-shadow: 0px -5px 20px -5px rgba(0, 0, 0, 0.3);
}

.table thead th {
  border-bottom-width: 0px;
  text-transform: capitalize;
  font-size: 18px;
  white-space: nowrap;
  font-weight: 300;
  letter-spacing: 0.5px;
  border-color: rgba(215, 218, 227, 0.3);
}

.table thead th {
  border-color: #3e454d;
}

.table tbody tr td {
  vertical-align: middle;
  color: rgba(255, 255, 255, 0.7);
  border-color: rgba(215, 218, 227, 0.3);
}

.table tbody tr td {
  border-color: #3e454d;
}

.table:not(.table-bordered) thead th {
  border-top: none;
}

.table .thead-primary th {
  background-color: #43c4d3;
  color: #fff;
}

.table .thead-info th {
  background-color: #3C65F5;
  color: #fff;
}

.table .thead-warning th {
  background-color: #FAFF00;
  color: #fff;
}

.table .thead-danger th {
  background-color: #B03636;
  color: #fff;
}

.table .thead-success th {
  background-color: #2bc155;
  color: #fff;
}

.table.primary-table-bordered {
  border: 1px solid #d7dae3;
}

.table.primary-table-bordered {
  border-color: #3e454d;
}

.table.primary-table-bg-hover thead th {
  background-color: #119d84;
  color: #fff;
  border-bottom: none;
}

.table.primary-table-bg-hover tbody tr {
  background-color: #43c4d3;
  color: #fff;
  transition: all .1s ease;
}

.table.primary-table-bg-hover tbody tr:hover {
  background-color: #15cbaa;
}

.table.primary-table-bg-hover tbody tr:not(:last-child) td,
.table.primary-table-bg-hover tbody tr:not(:last-child) th {
  border-bottom: 1px solid #119d84;
}

.table-responsive-tiny {
  min-width: 18.75rem;
}

.table-responsive-sm {
  min-width: 30rem !important;
}

.table-responsive-md {
  min-width: 36rem !important;
}

.table-responsive-lg {
  min-width: 60.9375rem !important;
}

.table-responsive-xl {
  min-width: 70.9375rem !important;
}

.table-responsive {
  border-radius: 0.75rem;
}

.table-primary,
.table-primary>th,
.table-primary>td {
  background-color: #b5f7eb;
  color: #43c4d3;
}

.table-primary,
.table-primary>th,
.table-primary>td {
  background-color: rgba(19, 180, 151, 0.2);
}

.table-success,
.table-success>th,
.table-success>td {
  background-color: #e7faec;
  color: #2bc155;
}

.table-success,
.table-success>th,
.table-success>td {
  background-color: rgba(43, 193, 85, 0.1);
}

.table-info,
.table-info>th,
.table-info>td {
  background-color: #fefeff;
  color: #3C65F5;
}

.table-info,
.table-info>th,
.table-info>td {
  background-color: rgba(60, 101, 245, 0.1);
}

.table-warning,
.table-warning>th,
.table-warning>td {
  background-color: #feffe0;
  color: #FAFF00;
}

.table-warning,
.table-warning>th,
.table-warning>td {
  background-color: rgba(250, 255, 0, 0.1);
}

.table-danger,
.table-danger>th,
.table-danger>td {
  background-color: #e19e9e;
  color: #B03636;
}

.table-danger,
.table-danger>th,
.table-danger>td {
  background-color: rgba(176, 54, 54, 0.15);
}

.table-active,
.table-active>th,
.table-active>td {
  background-color: #f6f6f6;
}

.table-active,
.table-active>th,
.table-active>td {
  background-color: #24292d;
}

.bootgrid-header {
  padding: 0 !important;
  margin: 0;
}

@media only screen and (max-width: 575px) {
  .bootgrid-header .actionBar {
      padding: 0;
  }
  .bootgrid-header .search {
      margin: 0 0 10px 0;
  }
}

table#example {
  padding: 0rem 0 2rem 0;
}

table.dataTable {
  color: #3e4954;
}

table.dataTable {
  color: rgba(255, 255, 255, 0.8);
}

#example2_wrapper .dataTables_scrollBody {
  max-height: 33.25rem !important;
}

#employees,
#custommers {
  padding: .5rem 0 1rem 0;
}

.dataTables_wrapper .dataTables_paginate {
  padding: 10px 0;
}

@media only screen and (max-width: 1199px) {
  .dataTables_wrapper .dataTables_paginate {
      padding: 5px 0;
  }
}

table.dataTable thead th,
table.dataTable thead td {
  padding: 25px 20px;
  border-bottom: 0px solid #d7dae3;
}

@media only screen and (max-width: 1199px) {
  table.dataTable thead th,
  table.dataTable thead td {
      padding: 8px 15px;
  }
}

table.dataTable tfoot th,
table.dataTable tfoot td {
  border-top: 0;
}

table.dataTable.shadow-hover tbody tr {
  background: transparent;
}

table.dataTable.shadow-hover tbody tr:hover {
  box-shadow: 0px 0px 20px 1px rgba(19, 180, 151, 0.3);
  background: transparent;
}

table.dataTable.patient-list tbody tr:hover {
  box-shadow: 0px 0px 20px 1px rgba(19, 180, 151, 0.3);
  background: #fff;
}

table.dataTable tbody tr {
  background: #2f363e;
}

table.dataTable thead th {
  color: #000;
  font-size: 18px;
  text-transform: capitalize;
  white-space: nowrap;
  font-weight: 400;
}

table.dataTable thead th {
  color: #fff;
}

@media only screen and (max-width: 1199px) {
  table.dataTable thead th {
      font-size: 16px;
  }
}

table.dataTable tbody td {
  padding: 25px 25px;
  background: transparent;
}

@media only screen and (max-width: 1199px) {
  table.dataTable tbody td {
      padding: 8px 15px;
  }
}

table.dataTable.display tbody tr.odd>.sorting_1,
table.dataTable.display tbody tr.even>.sorting_1,
table.dataTable.order-column.stripe tbody tr.even>.sorting_1 {
  background: transparent;
}

table.dataTable.order-column.stripe tbody tr.odd>.sorting_1,
table.dataTable.stripe tbody tr.odd,
table.dataTable.display tbody tr.odd {
  background: #24292d;
}

table.dataTable.hover tbody tr:hover,
table.dataTable.display tbody tr:hover {
  background: rgba(0, 0, 0, 0.2);
}

table.dataTable tr.selected {
  color: #43c4d3;
}

table.dataTable tfoot th {
  color: #3e4954;
  font-weight: 600;
}

table.dataTable tfoot th {
  color: #fff;
}

.dataTables_wrapper input[type="search"],
.dataTables_wrapper input[type="text"],
.dataTables_wrapper select {
  border: 1px solid #e2e2e2;
  padding: .3rem 0.5rem;
  color: #715d5d;
  border-radius: 5px;
}

.dataTables_wrapper input[type="search"],
.dataTables_wrapper input[type="text"],
.dataTables_wrapper select {
  background: #24292d;
  border-color: #3e454d;
  color: #fff;
}

.dataTables_wrapper .dataTables_length {
  margin-bottom: 15px;
}

.dataTables_wrapper .dataTables_length .bootstrap-select {
  width: 80px !important;
  margin: 0 5px;
}

table.dataTable.no-footer {
  border-bottom: 0;
}

.rounded-lg {
  min-width: 30px;
}

.dataTables_scroll {
  padding: 1rem 0;
}

.dataTables_scrollFoot {
  padding-top: 1rem;
}

@media (max-width: 991.98px) {
  .dataTables_wrapper .dataTables_length,
  .dataTables_wrapper .dataTables_filter {
      text-align: left;
  }
}

.dataTablesCard {
  background-color: #fff;
  box-shadow: 0px 12px 23px 0px rgba(62, 73, 84, 0.04);
  border-radius: 20px;
}

.dataTablesCard tbody tr:hover {
  background: #3D444B;
}

.dataTables_wrapper .dataTables_info {
  padding: 10px 0;
  color: #fff;
}

@media only screen and (max-width: 1199px) {
  .dataTables_wrapper .dataTables_info {
      padding: 8px 0;
  }
}

.no-data-img {
  background-image: none !important;
}

table.dataTable.row-border tbody th,
table.dataTable.row-border tbody td,
table.dataTable.display tbody th,
table.dataTable.display tbody td {
  border-color: #d7dae3;
}

table.dataTable.row-border tbody th,
table.dataTable.row-border tbody td,
table.dataTable.display tbody th,
table.dataTable.display tbody td {
  border-color: #3e454d;
}

table.dataTable thead .sorting {
  background-position: center right 15px;
}

.dataTables_wrapper .dataTables_paginate span {
  background: transparent;
  border-radius: 0.75rem;
  display: inline-block;
  margin: 0 10px;
}

.dataTables_wrapper .dataTables_paginate span a {
  color: #43c4d3;
  background: transparent !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
  border: 0 !important;
  padding: 10px 10px;
  height: 43px;
  width: 43px;
  background: transparent;
  border-radius: 0.75rem;
  color: #43c4d3 !important;
  font-size: 16px;
  display: inline-block;
}

@media only screen and (max-width: 575px) {
  .dataTables_wrapper .dataTables_paginate .paginate_button {
      padding: 8px 15px;
      font-size: 14px;
  }
}

.dataTables_wrapper .dataTables_paginate .paginate_button:hover,
.dataTables_wrapper .dataTables_paginate .paginate_button.current {
  color: #fff !important;
  background: #43c4d3 !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.previous,
.dataTables_wrapper .dataTables_paginate .paginate_button.next {
  background: transparent;
  color: #fff !important;
  width: 100px;
}

.dataTables_wrapper .dataTables_paginate .paginate_button.previous:hover,
.dataTables_wrapper .dataTables_paginate .paginate_button.next:hover {
  color: #fff !important;
  background: transparent;
}

.fooicon {
  font-size: 1.25rem;
  color: #3e4954;
}

.jsgrid-table .jsgrid-header-row>.jsgrid-header-cell {
  color: #3e4954;
}

.jsgrid-table>tbody>tr>td {
  padding: 1.2em;
}

.jsgrid-table .jsgrid-insert-row input,
.jsgrid-table .jsgrid-insert-row select,
.jsgrid-table .jsgrid-edit-row input,
.jsgrid-table .jsgrid-edit-row select {
  border: 1px solid #DDDFE1;
}

.jsgrid .jsgrid-button {
  border: 0 !important;
  margin-left: 10px;
}

.error-page .error-text {
  font-size: 150px;
  line-height: 1;
}

@media only screen and (max-width: 575px) {
  .error-page .error-text {
      font-size: 80px;
  }
}

.error-page h4 {
  font-size: 40px;
  margin-bottom: 5px;
}

@media only screen and (max-width: 575px) {
  .error-page h4 {
      font-size: 20px;
  }
}

.error-page p {
  font-size: 16px;
}

@media only screen and (max-width: 575px) {
  .error-page p {
      font-size: 14px;
  }
}

.authincation-content {
  background: #fff;
  box-shadow: 0 0 35px 0 rgba(154, 161, 171, 0.15);
  border-radius: 5px;
}

.authincation-content {
  background: #2f363e;
  box-shadow: none;
}

.welcome-content {
  background: url("https://karciz.dexignzone.com/xhtml/images/1.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  padding: 75px 50px;
  position: relative;
  z-index: 1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.welcome-content::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #43c4d3;
  opacity: 0.75;
  z-index: -1;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.welcome-content .welcome-title {
  color: #fff;
  font-weight: 500;
  font-size: 20px;
}

.welcome-content p {
  color: #fff;
}

.welcome-content .brand-logo a {
  display: inline-block;
  margin-bottom: 20px;
  font-weight: 700;
  color: #fff;
  font-size: 20px;
}

.welcome-content .brand-logo a img {
  width: 100px;
}

.welcome-content .intro-social {
  position: absolute;
  bottom: 75px;
}

.welcome-content .intro-social ul {
  margin-bottom: 0;
}

.welcome-content .intro-social ul li {
  display: inline-block;
}

.welcome-content .intro-social ul li a {
  color: #fff;
  font-size: 14px;
  padding: 0px 7px;
}

.auth-form {
  padding: 50px 50px;
}

@media only screen and (max-width: 575px) {
  .auth-form {
      padding: 30px;
  }
}

.auth-form .btn {
  height: 50px;
  font-weight: 700;
}

.auth-form .page-back {
  display: inline-block;
  margin-bottom: 15px;
}

.pricing_table_content {
  background: #fff;
  text-align: center;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
  padding: 25px;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.pricing_table_content .package {
  font-weight: 700;
  font-size: 18px;
}

.pricing_table_content .price {
  font-weight: 700;
  font-size: 50px;
  line-height: 100px;
  color: #3e4954;
}

.pricing_table_content hr {
  margin: 0;
}

.pricing_table_content .price_list {
  padding: 30px 0;
  text-align: left;
  max-width: 175px;
  margin: 0 auto;
}

.pricing_table_content .price_list li {
  color: #909093;
  font-size: 14px;
  line-height: 25px;
  padding: 7px 0;
}

.pricing_table_content .price_list li i {
  margin-right: 15px;
}

.pricing_table_content .price-btn {
  padding: 15px 50px;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 25px;
  -webkit-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}

.pricing_table_content:focus,
.pricing_table_content:hover {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.175);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.175);
}

.pricing_table_content:focus .price-btn,
.pricing_table_content:hover .price-btn {
  color: #B03636;
}

.page-timeline .timeline {
  list-style: none;
  padding: 40px 0;
  position: relative;
}

.page-timeline .timeline-workplan.page-timeline .timeline {
  padding-bottom: 0;
  margin-bottom: 0;
}

.page-timeline .timeline-workplan.page-timeline .timeline.timeline>li>.timeline-badge {
  top: 4.5rem;
}

.page-timeline .timeline-workplan.page-timeline .timeline>li {
  margin-bottom: 2.6rem;
}

@media only screen and (min-width: 1200px) and (max-width: 1650px) {
  .page-timeline .timeline-workplan.page-timeline .timeline li>p {
      max-width: 8rem;
  }
}

@media only screen and (max-width: 1199px) {
  .page-timeline .timeline-workplan.page-timeline .timeline li>p {
      max-width: 7rem;
  }
}

@media only screen and (max-width: 991px) {
  .page-timeline .timeline-workplan.page-timeline .timeline li>p {
      max-width: 100%;
  }
}

@media only screen and (max-width: 575px) {
  .page-timeline .timeline-workplan.page-timeline .timeline li>p {
      max-width: 7rem;
  }
}

.page-timeline .timeline-workplan.page-timeline .timeline::before {
  left: 20%;
  top: 6rem;
}

[direction="rtl"] .page-timeline .timeline-workplan.page-timeline .timeline::before {
  right: 22%;
  left: auto;
}

@media only screen and (max-width: 575px) {
  .page-timeline .timeline-workplan.page-timeline .timeline::before {
      left: 22%;
  }
}

.page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge {
  left: 21.4%;
  height: 0.9rem;
  width: 0.9rem;
  background-color: #43c4d3;
}

[direction="rtl"] .page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge {
  right: 19.2%;
  left: auto;
}

@media only screen and (min-width: 1200px) and (max-width: 1650px) {
  .page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge {
      left: 22.4%;
  }
}

@media only screen and (max-width: 1199px) {
  .page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge {
      left: 22.4%;
  }
}

@media only screen and (max-width: 991px) {
  .page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge {
      left: 21.7%;
  }
}

@media only screen and (max-width: 767px) {
  .page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge {
      left: 19.5%;
  }
}

@media only screen and (max-width: 575px) {
  .page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge {
      left: 21.4%;
  }
}

.page-timeline .timeline-workplan.page-timeline .timeline .timeline-badge::after {
  position: absolute;
  width: 1.9rem;
  height: 1.9rem;
  background-color: rgba(19, 180, 151, 0.4);
  content: "";
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.page-timeline .timeline-workplan.page-timeline .timeline .timeline-panel {
  width: 70%;
}

.page-timeline .timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 2px;
  background-color: #ECEFF2;
  left: 50%;
  margin-left: -1.5px;
}

.page-timeline .timeline>li {
  margin-bottom: 20px;
  position: relative;
}

.page-timeline .timeline>li:after,
.page-timeline .timeline>li:before {
  content: " ";
  display: table;
}

.page-timeline .timeline>li:after {
  clear: both;
}

.page-timeline .timeline>li:after,
.page-timeline .timeline>li:before {
  content: " ";
  display: table;
}

.page-timeline .timeline>li:after {
  clear: both;
}

.page-timeline .timeline>li>.timeline-panel {
  width: 46%;
  float: left;
  border-radius: 2px;
  position: relative;
}

.page-timeline .timeline>li>.timeline-badge {
  background-color: #f6f6f6;
  border: 1px solid #DDDFE1;
  border-radius: 50%;
  color: #3e4954;
  height: 40px;
  left: 50%;
  line-height: 40px;
  margin-left: -13px;
  position: absolute;
  text-align: center;
  top: 30px;
  width: 40px;
  z-index: 1;
  transform: translate(-25%, -3rem);
}

@media (min-width: 576px) {
  .page-timeline .timeline>li>.timeline-badge {
      width: 50px;
      height: 50px;
      line-height: 50px;
  }
}

.page-timeline .timeline>li.timeline-inverted>.timeline-panel {
  float: right;
}

.page-timeline .timeline>li.timeline-inverted>.timeline-panel:before {
  border-left-width: 0;
  border-right-width: 15px;
  left: -15px;
  right: auto;
}

.page-timeline .timeline>li.timeline-inverted>.timeline-panel:after {
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

.page-timeline .timeline-title {
  margin-top: 0;
  color: inherit;
}

.page-timeline .event_time {
  font-size: 14px;
  font-weight: 600;
}

.page-timeline .event_vanue {
  font-size: 14px;
  margin: 5px 0;
  font-weight: 600;
}

.page-timeline .timeline_img {
  height: 100px;
  width: 100px;
}

.page-timeline .timeline-body>p,
.page-timeline .timeline-body>ul {
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .page-timeline ul.timeline:before {
      left: 40px;
  }
  .page-timeline ul.timeline>li>.timeline-panel {
      width: calc(100% - 90px);
      width: -webkit-calc(100% - 90px);
  }
  .page-timeline ul.timeline>li>.timeline-badge {
      left: 28px;
      margin-left: 0;
      top: 16px;
  }
  .page-timeline ul.timeline>li>.timeline-panel {
      float: right;
  }
  .page-timeline ul.timeline>li>.timeline-panel:before {
      border-left-width: 0;
      border-right-width: 15px;
      left: -15px;
      right: auto;
  }
  .page-timeline ul.timeline>li>.timeline-panel:after {
      border-left-width: 0;
      border-right-width: 14px;
      left: -14px;
      right: auto;
  }
  .page-timeline .timeline_img {
      height: 30%;
      width: 30%;
  }
}

.page-timeline .timeline-timestamp {
  text-align: center;
}

.page-timeline .timeline-timestamp .badge {
  padding: .8rem 2rem;
  border-radius: 50px;
  font-size: 0.8125rem;
}

.review-tab.nav-pills {
  margin-bottom: 0;
  align-items: flex-end;
}

.review-tab.nav-pills li {
  display: inline-block;
}

.review-tab.nav-pills li a.nav-link {
  color: rgba(255, 255, 255, 0.4);
  background: transparent;
  text-transform: capitalize;
  box-shadow: none;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  border-radius: 0;
  font-weight: 400;
  font-size: 18px;
  padding: 15px 40px;
  margin-right: 1px;
  position: relative;
}

.review-tab.nav-pills li a.nav-link:after {
  position: absolute;
  content: "";
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  height: 5px;
  width: 0px;
  background: #43c4d3;
  border-radius: 5px;
  left: 50%;
  transform: translatex(-50%);
  bottom: -7px;
}

.review-tab.nav-pills li a.nav-link.active {
  color: #fff;
}

.review-tab.nav-pills li a.nav-link.active:after {
  width: 58px;
}

@media only screen and (max-width: 1400px) {
  .review-tab.nav-pills li a.nav-link.active {
      font-size: 14px;
      padding: 12px 15px;
  }
}

@media only screen and (max-width: 1400px) {
  .review-tab.nav-pills li a.nav-link {
      font-size: 14px;
      padding: 10px 15px;
  }
}

.bg-image {
  z-index: 1;
}

.bg-image:after {
  position: absolute;
  content: "";
  background-image: url("https://karciz.dexignzone.com/xhtml/images/dolor.png");
  height: 150px;
  width: 100%;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-position: bottom right;
  bottom: -30px;
  z-index: -1;
}

.bg-image-2 {
  z-index: 1;
}

.bg-image-2:after {
  position: absolute;
  content: "";
  background-image: url("https://karciz.dexignzone.com/xhtml/images/ticket.png");
  height: 150px;
  width: 100%;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-position: bottom right;
  bottom: -30px;
  z-index: -1;
}

.testimonial-one .owl-nav {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  bottom: 24px;
  font-size: 27px;
  color: #fff;
  padding: 0 30px;
}

.testimonial-one span {
  position: absolute;
  bottom: 35px;
  left: 50%;
  color: #fff;
  z-index: 1;
  transform: translateX(-50%);
}

.testimonial-one .image:after {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  content: "";
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,000000+100&0+64,0.7+100 */
  background: -moz-linear-gradient(top, rgba(30, 87, 153, 0) 0%, rgba(11, 31, 55, 0) 64%, rgba(0, 0, 0, 0.7) 100%);
  /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(30, 87, 153, 0) 0%, rgba(11, 31, 55, 0) 64%, rgba(0, 0, 0, 0.7) 100%);
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(30, 87, 153, 0) 0%, rgba(11, 31, 55, 0) 64%, rgba(0, 0, 0, 0.7) 100%);
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#001e5799', endColorstr='#b3000000', GradientType=0);
  /* IE6-9 */
}

.chart-point>div {
  width: 100px;
  color: rgba(255, 255, 255, 0.7);
}

.chart-point>div .a,
.chart-point>div .b,
.chart-point>div .c {
  height: 21px;
  width: 21px;
  display: block;
  margin-bottom: 8px;
  border-radius: 5px;
}

.chart-point>div .a {
  background: #87FFE9;
}

.chart-point>div .b {
  background: #43c4d3;
}

.chart-point>div .c {
  background: #0B6050;
}

.sales-comparison {
  background: #43c4d3;
  background: -moz-linear-gradient(-45deg, #43c4d3 0%, #05737a 100%);
  background: -webkit-linear-gradient(-45deg, #43c4d3 0%, #05737a 100%);
  background: linear-gradient(135deg, #43c4d3 0%, #05737a 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#43c4d3', endColorstr='#05737a', GradientType=1);
}

.abilities-chart .ct-chart .ct-series.ct-series-a .ct-slice-donut {
  stroke: #0B6050;
}

.abilities-chart .ct-chart .ct-series.ct-series-b .ct-slice-donut {
  stroke: #43c4d3;
}

.abilities-chart .ct-chart .ct-series.ct-series-c .ct-slice-donut {
  stroke: #87FFE9;
}

.selling-pie-chart {
  width: 200px;
  height: 200px;
  margin: 30px auto;
  display: block;
}

.selling-pie-chart canvas {
  max-height: 200px;
}

.order-request tbody tr {
  display: block;
  padding: 0 20px;
  position: relative;
  box-shadow: 0 1px 0 0 #f8f8f8;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

.order-request tbody tr.active,
.order-request tbody tr:hover {
  box-shadow: 0 0 20px -3px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

.order-request tbody tr th,
.order-request tbody tr td {
  border: 0;
  padding: 18px 8px;
}

.order-request tbody tr th:nth-child(1),
.order-request tbody tr td:nth-child(1) {
  width: 35%;
}

@media only screen and (max-width: 1400px) {
  .order-request tbody tr th:nth-child(1),
  .order-request tbody tr td:nth-child(1) {
      width: 40%;
  }
}

.order-request tbody tr th:nth-child(2),
.order-request tbody tr td:nth-child(2) {
  width: 17%;
}

@media only screen and (max-width: 1400px) {
  .order-request tbody tr th:nth-child(2),
  .order-request tbody tr td:nth-child(2) {
      width: 20%;
  }
}

.order-request tbody tr th:nth-child(4),
.order-request tbody tr td:nth-child(4) {
  width: 18%;
}

@media only screen and (max-width: 767px) {
  .order-request tbody tr .media {
      width: 250px;
  }
}

@media only screen and (max-width: 575px) {
  .order-request {
      width: 500px;
  }
}

.wspace-no {
  white-space: nowrap;
}

.star-review i {
  font-size: 16px;
}

.star-review i.text-gray {
  color: #d9d9d9;
}

.star-review span {
  color: #000;
}

.chart-deta .col {
  display: flex;
  padding: 0;
  margin-right: 15px;
  margin-bottom: 30px;
}

.chart-deta .col:last-child {
  margin-bottom: 0;
}

@media only screen and (max-width: 575px) {
  .chart-deta .col {
      margin-bottom: 5px;
  }
}

.chart-deta .col p {
  margin-bottom: 5px;
  line-height: 1.5;
  font-weight: 500;
}

@media only screen and (max-width: 575px) {
  .chart-deta .col p {
      font-size: 14px;
      display: inline-block;
  }
}

.chart-deta .col h3 {
  font-size: 34px;
  margin-bottom: 0;
  color: #000;
}

@media only screen and (max-width: 575px) {
  .chart-deta .col h3 {
      font-size: 14px;
      display: inline-block;
  }
}

.chart-deta .col [class*="bg-"] {
  height: 30px;
  width: 30px;
  border-radius: 50px;
  margin-right: 25px;
}

@media only screen and (max-width: 575px) {
  .chart-deta .col [class*="bg-"] {
      height: 16px;
      width: 16px;
      margin-right: 10px;
      margin-top: 5px;
  }
}

.trending-menus .timeline .timeline-panel {
  padding: 25px 30px 30px 30px;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  border-bottom: 1px solid #EEEEEE;
  margin-bottom: 0;
}

@media only screen and (max-width: 575px) {
  .trending-menus .timeline .timeline-panel {
      display: block;
      padding: 15px 15px 30px 15px;
  }
}

.trending-menus .timeline .timeline-panel.active,
.trending-menus .timeline .timeline-panel:hover {
  box-shadow: 0 5px 35px 0 rgba(0, 0, 0, 0.05);
}

.trending-menus .timeline .timeline-panel .media {
  width: 60px;
  height: 60px;
  position: relative;
  overflow: unset;
  border-radius: 0.75rem;
}

@media only screen and (max-width: 575px) {
  .trending-menus .timeline .timeline-panel .media {
      width: 80px;
      height: 80px;
      float: left;
      margin-right: 15px !important;
  }
}

.trending-menus .timeline .timeline-panel .media img {
  border-radius: 0.75rem;
  width: 100%;
}

.trending-menus .timeline .timeline-panel .media .number {
  width: 42px;
  height: 42px;
  border-radius: 40px;
  position: absolute;
  bottom: -25px;
  left: 50%;
  border: 3px solid #fff;
  line-height: 38px;
  transform: translateX(-50%);
  text-align: center;
  background: #FAFF00;
  color: #000;
  font-size: 16px;
  font-weight: 600;
}

@media only screen and (max-width: 575px) {
  .trending-menus .timeline .media-body {
      margin-bottom: 10px;
  }
}

.trending-menus .timeline .social-media a {
  padding: 0;
  font-size: 18px !important;
  width: 40px;
  height: 40px;
  line-height: 40px;
}

.trending-menus .timeline li:last-child .timeline-panel {
  padding-bottom: 20px;
}

.form-head .settings-icon {
  height: 56px;
  width: 56px;
  line-height: 56px;
  text-align: center;
  color: #fff;
  border-radius: 4rem;
  background: #FF6D4C;
  font-size: 25px;
}

@media only screen and (max-width: 1400px) {
  .form-head .settings-icon {
      height: 41px;
      width: 41px;
      line-height: 41px;
      font-size: 22px;
  }
}

.form-head .search-area {
  max-width: 250px;
  border-radius: 3rem;
  background: #fff;
}

@media only screen and (max-width: 1400px) {
  .form-head .search-area {
      max-width: 180px;
  }
}

@media only screen and (max-width: 575px) {
  .form-head .search-area {
      max-width: 250px;
  }
}

.form-head .search-area .form-control {
  border: 0;
  background: transparent;
  padding: 10px 30px;
  font-size: 16px;
}

@media only screen and (max-width: 1400px) {
  .form-head .search-area .form-control {
      height: 41px;
      padding: 10px 15px;
      font-size: 13px;
  }
}

.form-head .search-area .input-group-append .input-group-text {
  background: transparent;
  padding: 0 30px;
}

@media only screen and (max-width: 1400px) {
  .form-head .search-area .input-group-append .input-group-text {
      padding: 0 15px;
  }
}

.form-head .search-area .input-group-append .input-group-text i {
  font-size: 24px;
  color: #b7b7b7;
}

@media only screen and (max-width: 1400px) {
  .form-head .search-area .input-group-append .input-group-text i {
      font-size: 18px;
  }
}

.form-head .dropdown .btn i {
  transform: scale(1.3);
  -moz-transform: scale(1.3);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  -o-transform: scale(1.3);
  display: inline-block;
}

.form-head .btn i {
  line-height: 1;
  transform: scale(1.3);
  display: inline-block;
  margin-right: 5px;
}

.form-head .btn-outline-primary {
  border-color: #eee;
  color: #000;
}

.form-head .btn-outline-primary:hover {
  border-color: #43c4d3;
  color: #fff;
}

.form-head .btn-outline-primary:hover svg g path {
  fill: #fff;
}

.form-head .btn-outline-primary:hover:after {
  color: #fff;
}

.form-head .btn-outline-primary:after {
  color: #43c4d3;
  font-size: 18px;
}

@media only screen and (max-width: 1400px) {
  .form-head>* {
      margin-right: 5px !important;
      margin-bottom: 10px;
      display: inline-block;
      vertical-align: baseline;
  }
}

@media only screen and (max-width: 991px) {
  .form-head>* {
      margin-left: 0 !important;
  }
}

@media only screen and (max-width: 767px) {
  .form-head {
      display: block !important;
  }
}

.rounded {
  border-radius: 5px !important;
}

.btn-link {
  font-weight: 500;
  font-size: 16px;
}

.plus-box {
  background: #0c6f5d;
  color: #fff;
  font-size: 16px;
  padding: 35px 20px;
  position: relative;
  display: flex;
  overflow: hidden;
  margin: 0 50px;
  border-radius: 1rem;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 40px;
}

.plus-box i {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 8px;
  margin-left: 10px;
  text-align: center;
  background: rgba(255, 255, 255, 0.4);
}

.plus-box p {
  margin-bottom: 0;
  line-height: 1.5;
}

@media only screen and (max-width: 1199px) {
  .plus-box {
      margin: 25px 30px;
  }
}

@media only screen and (max-width: 767px) {
  .plus-box {
      margin: 0 20px;
      margin-bottom: 20px;
      margin-top: 20px;
  }
}

.plus-box:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  height: 30px;
  width: 35px;
  background-image: url("https://karciz.dexignzone.com/xhtml/images/dots2.png");
  background-repeat: no-repeat;
  opacity: 1;
}

.plus-box:before {
  position: absolute;
  content: "";
  left: 20px;
  top: 0px;
  height: 30px;
  width: 30px;
  background-image: url("https://karciz.dexignzone.com/xhtml/images/dots.png");
  background-repeat: no-repeat;
  opacity: 1;
}

.deznav .copyright {
  font-size: 12px;
  padding: 0 50px;
  margin-bottom: 40px;
}

.deznav .copyright p {
  margin-bottom: 10px;
}

@media only screen and (max-width: 1199px) {
  .deznav .copyright {
      padding: 0 30px;
  }
}

@media only screen and (max-width: 767px) {
  .deznav .copyright {
      padding: 0 20px;
  }
}

.recentOrderTable table {
  margin-bottom: 0;
  overflow: hidden;
}

.recentOrderTable table thead th {
  font-size: 12px;
}

.recentOrderTable table tbody td {
  color: #3e4954;
  font-weight: 500;
  line-height: 40px;
}

.recentOrderTable table tbody td {
  color: #b7b7b7;
}

.recentOrderTable table tbody td img {
  border-radius: 50px;
}

.recentOrderTable table tbody td .custom-dropdown i {
  padding: 0 10px;
  cursor: pointer;
}

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking {
  background-color: transparent !important;
  opacity: 0.9;
}

#user-activity .nav-tabs {
  border-bottom: 0px;
}

#user-activity .nav-tabs .nav-link {
  border-radius: 0;
  margin-left: -1px;
  padding: 5px 15px;
  border: 1px solid #D1D1D1;
}

#user-activity .nav-tabs .nav-link.active {
  background: #43c4d3;
  color: #fff;
  border-color: #43c4d3;
}

#user-activity .nav-tabs li:first-child a {
  border-radius: 0.75rem 0 0 0.75rem;
}

#user-activity .nav-tabs li:last-child a {
  border-radius: 0 0.75rem 0.75rem 0;
}

#activeUser {
  height: 215px !important;
}

#activeUser {
  height: 180px !important;
}

span#counter {
  font-size: 30px;
  font-weight: 700;
  color: #43c4d3;
}

.social-graph-wrapper {
  text-align: center;
  padding: 20px;
  position: relative;
  color: #fff;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.social-graph-wrapper.widget-facebook {
  background-color: #3b5998;
}

.social-graph-wrapper.widget-twitter {
  background-color: #1da1f2;
}

.social-graph-wrapper.widget-linkedin {
  background-color: #007bb6;
}

.social-graph-wrapper.widget-googleplus {
  background-color: #db4439;
}

.social-graph-wrapper .s-icon {
  font-size: 24px;
  position: relative;
  padding: 0 10px;
}

.recent-stats i {
  font-size: 11px;
  position: relative;
  top: -1px;
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {
  #lineChart_3Kk {
      height: 140px !important;
  }
}

.card-tabs .nav-tabs {
  background: transparent;
  padding: 5px;
  border-width: 0px;
  flex-wrap: unset;
}

.card-tabs .nav-tabs .nav-link {
  border-radius: 5px;
  padding: 0px 15px 15px;
  font-weight: 500;
  color: rgb(28 116 127);
  font-size: 14px;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  border: 0;
  position: relative;
}

.card-tabs .nav-tabs .nav-link:after {
  position: absolute;
  width: 100%;
  height: 0;
  background: #43c4d3;
  bottom: 0;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
  border-radius: 5px 5px 0 0;
  left: 0;
  content: "";
}

.card-tabs .nav-tabs .nav-link.active {
  background: transparent;
  color: #43c4d3;
}

.card-tabs .nav-tabs .nav-link.active:after {
  height: 6px;
}

.card-tabs .nav-tabs .nav-item {
  display: inline-block;
}

@media only screen and (max-width: 575px) {
  .card-tabs .nav-tabs {
      display: block;
  }
}

.iconbox {
  position: relative;
  padding: 15px 30px 15px 70px;
  border-radius: 0.75rem;
  display: inline-block;
  background: #838d97;
  text-align: left;
}

.iconbox i {
  width: 70px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 32px;
  color: #fff;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.iconbox p {
  margin: 0;
  color: #fff;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 500;
}

.iconbox small {
  margin-bottom: 5px;
  font-size: 16px;
  display: block;
  color: #fff;
}

.widget-timeline-icon {
  padding: 50px;
}

@media only screen and (max-width: 1400px) {
  .widget-timeline-icon {
      padding: 30px;
  }
}

@media only screen and (max-width: 575px) {
  .widget-timeline-icon {
      overflow: scroll;
      padding: 15px;
  }
}

.widget-timeline-icon .timeline {
  display: flex;
}

@media only screen and (max-width: 575px) {
  .widget-timeline-icon .timeline {
      display: block;
      margin-left: 10px;
  }
}

.widget-timeline-icon li {
  position: relative;
  border-top: 2px solid #FAFF00;
}

@media only screen and (max-width: 575px) {
  .widget-timeline-icon li {
      border-top: 0;
      border-left: 3px solid #FAFF00;
  }
}

.widget-timeline-icon li a {
  padding: 15px 50px 0px 0px;
  display: block;
}

@media only screen and (max-width: 1400px) {
  .widget-timeline-icon li a {
      padding: 15px 25px 0px 0px;
  }
}

@media only screen and (max-width: 575px) {
  .widget-timeline-icon li a {
      padding: 0px 0px 30px 30px;
  }
}

.widget-timeline-icon li .icon {
  position: absolute;
  width: 10px;
  height: 10px;
  font-size: 24px;
  color: #fff;
  text-align: center;
  line-height: 56px;
  border-radius: 56px;
  left: -2px;
  top: -6px;
}

@media only screen and (max-width: 575px) {
  .widget-timeline-icon li .icon {
      left: -7px;
      top: -4px;
  }
}

.widget-timeline-icon li:last-child {
  border-top: 3px solid transparent;
}

@media only screen and (max-width: 575px) {
  .widget-timeline-icon li:last-child {
      border-left: 3px solid #eee;
  }
}

@media only screen and (max-width: 767px) {
  .order-list .media {
      width: 290px;
  }
}

.full-map-area {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.full-map-area a {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: #3f4953;
  padding: 12px;
  border-radius: 0.75rem;
}

.full-map-area .map-text {
  position: absolute;
  top: 30px;
  right: 30px;
}

.favorites-items img {
  width: 110px;
}

.ticket-bx {
  color: #7AF4ED;
  background: #43c4d3;
  background: -moz-linear-gradient(-45deg, #43c4d3 0%, #05737a 100%);
  background: -webkit-linear-gradient(-45deg, #43c4d3 0%, #05737a 100%);
  background: linear-gradient(135deg, #43c4d3 0%, #05737a 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#43c4d3', endColorstr='#05737a', GradientType=1);
}

.ticket-bx .progress {
  background: rgba(255, 255, 255, 0.2);
}

.ticket-bx .progress-bar-striped {
  background-image: linear-gradient(45deg, white, transparent 25%, transparent 50%, white, white, transparent 75%, transparent);
  background-size: 2rem 2rem;
}

.event-bx .image {
  position: relative;
  margin-right: 30px;
}

.event-bx .image img {
  width: 128px;
  border-radius: 0.75rem;
}

@media only screen and (max-width: 575px) {
  .event-bx .image img {
      width: 90px;
  }
}

.event-bx .image .image-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 43px;
  height: 31px;
  border-radius: 0.75rem 0 0.75rem 0;
  line-height: 31px;
  text-align: center;
  font-size: 18px;
  background: #43c4d3;
  color: #fff;
}

@media only screen and (max-width: 575px) {
  .event-bx .image .image-icon {
      width: 30px;
  }
}

@media only screen and (max-width: 767px) {
  .event-bx .image {
      float: left;
  }
}

@media only screen and (max-width: 575px) {
  .event-bx .image {
      margin-right: 15px;
  }
}

.event-bx .media-footer {
  display: flex;
  width: 44%;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: auto;
}

@media only screen and (max-width: 767px) {
  .event-bx .media-footer {
      width: 100%;
      justify-content: left;
  }
  .event-bx .media-footer>div {
      margin-right: 30px;
  }
}

@media only screen and (max-width: 575px) {
  .event-bx .media-footer>div {
      margin-right: 20px;
  }
}

.event-bx .card-body {
  height: 500px;
}

.ticket-icon {
  height: 52px;
  width: 52px;
  min-width: 52px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 100%;
  line-height: 52px;
  text-align: center;
}

.index-chart-point {
  display: flex;
  align-items: center;
}

.index-chart-point .check-point-area {
  width: 100px;
  padding-top: 8px;
  height: 100px;
  margin-top: -10px;
  margin-left: -10px;
}

.index-chart-point-list li {
  width: 94px;
  float: left;
  margin-right: 3px;
  color: #fff;
  font-size: 14px;
}

.index-chart-point-list li i {
  margin-right: 8px;
  font-size: 10px;
}

.mt-widget {
  margin-top: -40px;
}

.min-w22 {
  min-width: 22px;
}

.min-w50 {
  min-width: 50px;
}

.search-area .form-control {
  background: #1C2126 !important;
  border-top-right-radius: 0.75rem !important;
  border-bottom-right-radius: 0.75rem !important;
  width: 200px;
}

.search-area .input-group-text {
  background: transparent !important;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translatey(-50%);
}

@media screen and (max-width: 1300px) {
  .search-area {
      display: none !important;
  }
}


/*
===================================
Product detail
===================================*/

.produtct-detail-tag {
  display: inline-block;
}

.produtct-detail-tag a {
  font-style: 13px;
  color: #3e4954;
}

.product-detail-content .item-tag {
  background: #828690;
  border-radius: 6px;
  display: inline-block;
  font-size: 12px;
  margin-right: 4px;
  padding: 2px 12px;
  color: #fff;
}

.filtaring-area h4 {
  color: #1d1d1d;
  font-size: 16px;
  font-weight: 400;
  text-transform: lowercase;
}

.plus-minus-input .input-icon {
  font-size: 13px;
  color: #3e4954;
}

.plus-minus-input {
  display: flex;
  width: 120px;
}

.plus-minus-input .custom-btn {
  border-radius: 0;
  height: 40px;
  padding: 12px 8px;
  background: #fff;
  border: 1px solid #d7dae3;
}

.plus-minus-input .form-control:hover,
.plus-minus-input .form-control:focus,
.plus-minus-input .form-control:active {
  border: 1px solid #d7dae3;
}

.btn-reveal-trigger .avatar-xl {
  min-width: 30px;
}

.share-view {
  display: inline-block;
}

.share-view ul li {
  display: inline-block;
}

.share-view .share-icon {
  width: 40px;
  height: 40px;
  display: inline-block;
  border: 1px solid #d7dae3;
  text-align: center;
  line-height: 40px;
  font-style: 16px;
  color: #d7dae3;
  margin-right: 8px;
}


/*--------tab----------*/

.veritical-line {
  padding: 20px 30px;
  border-top: 1px solid #d7dae3;
  border-right: 1px solid #d7dae3;
  border-bottom: 1px solid #d7dae3;
  position: relative;
}

.veritical-line:before {
  background: #d7dae3;
  bottom: 0;
  content: "";
  height: 100%;
  left: -1px;
  max-height: 40%;
  position: absolute;
  width: 1px;
}

.tab-content-text p {
  color: #3e4954;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 25px;
}

.tab-item-list li a {
  background: #fff;
  border-top: 1px solid #d7dae3;
  border-left: 1px solid #d7dae3;
  border-right: 1px solid #d7dae3;
  color: #3e4954;
  display: block;
  font-size: 16px;
  padding: 16px;
  text-transform: uppercase;
}

.tab-item-list li a:hover,
.tab-item-list li a:focus {
  background: #fff;
  color: #3e4954;
  border-right: 0px;
}

.tab-item-list li:last-child {
  border-bottom: 1px solid #d7dae3;
}

.tab-list li {
  margin-bottom: 7px;
  font-size: 13px;
}

.tab-list li i {
  font-size: 13px;
  margin-right: 14px;
}

.slide-item-list {
  text-align: center;
  margin: 0 -5px;
}

.slide-item-list li {
  display: inline-block;
  flex: 0 0 25%;
  width: 25%;
  padding: 0 5px;
}

.slide-item-list li a {
  display: inline-block;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  background: transparent;
  padding-bottom: 0px;
}

.slide-item-list li a:hover,
.slide-item-list li a:focus {
  background: transparent;
}

.slide-item-list li a img {
  width: 100%;
}

.product-detail-text {
  padding-top: 28px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 70px;
}

.star-rating .product-review {
  font-style: 13px;
  color: #3e4954;
  font-weight: 400;
  text-decoration: underline !important;
}

.product-detail .tab-content img {
  display: inline-block;
  width: 100%;
}

.popular-tag ul {
  margin: 0px;
  padding: 0px;
}

.popular-tag ul li {
  display: inline-block;
  padding: 8px 15px;
  background: #f8f8f8;
  font-size: 13px;
  color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;
}

.size-filter ul li {
  display: inline-block;
}

.intro {
  border: 1px solid red;
  color: #1d1d1d;
}

#listResults .slider {
  margin: 25px 0;
}

#listResults .slider-box {
  width: 90%;
  margin: 25px auto;
}

#listResults input {
  width: 10%;
}

#listResults label {
  border: none;
  display: inline-block;
  margin-right: -4px;
  vertical-align: top;
  width: 30%;
}

.plus-minus-input .input-icon {
  font-size: 13px;
  color: #aaaaaa;
}

.plus-minus-input .custom-btn {
  border-radius: 0;
  height: 40px;
  padding: 8px 12px;
  background: #ffffff;
  border: 1px solid #c8c8c8;
}

.plus-minus-input .custom-btn:hover,
.plus-minus-input .custom-btn:focus,
.plus-minus-input .custom-btn.active {
  box-shadow: none;
  outline: none;
}

.plus-minus-input .form-control {
  height: 40px;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  border-left: 0px solid #c8c8c8;
  border-right: 1px solid #c8c8c8;
}

.plus-minus-input .form-control:hover,
.plus-minus-input .form-control:focus,
.plus-minus-input .form-control:active {
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  border-left: 0px solid #c8c8c8;
  border-right: 0px solid #c8c8c8;
}

.new-arrival-product .new-arrivals-img-contnent {
  overflow: hidden;
}

.new-arrival-product .new-arrivals-img-contnent img {
  width: 100%;
  -webkit-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transition: all 0.5s;
}

.new-arrival-product:hover .new-arrivals-img-contnent img {
  transform: scale(1.5) translateY(12%);
  -moz-transform: scale(1.5) translateY(12%);
  -webkit-transform: scale(1.5) translateY(12%);
  -ms-transform: scale(1.5) translateY(12%);
  -o-transform: scale(1.5) translateY(12%);
}

.new-arrival-content .text-black {
  color: #fff !important;
}


/*
===================================
list view
===================================*/

.new-arrival-content .item {
  font-size: 12px;
  color: #3e4954;
}

.new-arrival-content h4 {
  font-size: 16px;
  color: #b7b7b7;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
}

.new-arrival-content .price {
  font-weight: 700;
  color: #43c4d3;
  font-size: 22px;
  margin-bottom: 20px;
}

.new-arrival-content p {
  font-size: 14px;
  color: #b7b7b7;
  margin-bottom: 6px;
  line-height: 24px;
}

.new-arrival-content .text-content {
  margin-top: 18px;
}

.success-icon {
  color: #2bc155;
  font-size: 16px;
}

.comment-review {
  position: absolute;
  right: 0;
  top: 25px;
}

.comment-review .client-review {
  color: #b7b7b7;
  padding-right: 20px;
  text-decoration: underline !important;
  font-size: 14px;
}

.comment-review .span {
  color: #b7b7b7;
  font-size: 14px;
}

.star-rating li {
  display: inline-block;
}

.star-rating li i {
  color: gold;
}


/*$primary  : #7356f1 !default;*/


h1.text-black,
h2.text-black,
h3.text-black,
h4.text-black,
h5.text-black,
h6.text-black {
  color: #000 !important;
}

a.link {
  color: #ddd;
}

a.link:focus,
a.link:hover {
  color: #3C65F5;
}

a:hover {
  color: #fff;
}

.border-right {
  border-right: 1px solid #3e454d !important;
}

.border-left {
  border-left: 1px solid #3e454d !important;
}

.border-top {
  border-top: 1px solid #3e454d !important;
}

.border-bottom {
  border-bottom: 1px solid #3e454d !important;
}

.border {
  border: 1px solid #3e454d !important;
}

.dropdown-menu {
  background-color: #272e35;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.15);
}

.dropdown-menu .dropdown-item.selected,
.dropdown-menu .dropdown-item.selected.active,
.dropdown-menu .dropdown-item.active,
.dropdown-menu .dropdown-item:hover,
.dropdown-menu .dropdown-item:focus {
  background-color: #2f363e;
  color: #b7b7b7;
}


.btn-outline-dark:hover {
  background-color: #24292d;
  border-color: #24292d;
}

.tdl-holder input[type=text],
.tdl-holder li {
  background-color: #2f363e;
  border-color: #3e454d;
}

.tdl-holder input[type=text]::placeholder {
  color: #b7b7b7;
}

.tdl-holder label:hover {
  background-color: #3e454d;
  color: #fff;
}

.text-muted {
  color: #444444 !important;
}

.modal-content {
  background: #2f363e;
}

.modal-footer,
.modal-header {
  border-color: #3e454d;
}

.close {
  font-weight: 400;
  color: #fff;
  text-shadow: none;
}

.close:hover {
  color: #fff;
}

.table strong {
  color: #fff;
}

.text-dark {
  color: #b7b7b7 !important;
}

.star-rating .product-review,
.new-arrival-content .item {
  color: #fff;
}

.custom-dropdown .dropdown-menu {
  border-color: #3e454d;
}

.plus-minus-input .custom-btn {
  background: #24292d;
  border-color: #3e454d;
}

.dropdown-divider,
.size-filter ul li {
  border-color: #3e454d;
}

.custom-select {
  border-color: #3e454d;
  color: #b7b7b7;
  background: #24292d;
}

.nav-tabs {
  /* border-color: #b2b2b2; */
  /* background-color: #090d13; */
  display: flex;
  justify-content: center;
}

.mail-list .list-group-item.active i {
  color: #fff;
}

hr {
  border-color: #1e2124;
}

.grid-col {
  background: #24292d;
}

.noUi-target {
  border-color: #3e454d;
  border-radius: 8px;
  box-shadow: none;
}

.noUi-target .noUi-connects {
  background: #3e454d;
}

.noUi-marker-large,
.noUi-marker {
  background: #3e454d;
}

.input-group-text {
  background: #3e454d;
  color: #b7b7b7;
}

.note-editor.note-frame {
  border-color: #3e454d;
}

.note-editor.note-frame .btn {
  color: #fff;
}

.note-editor.note-frame .note-editing-area .note-editable {
  color: #fff;
}

.widget-media .timeline .timeline-panel {
  border-color: #3e454d;
}

.notification_dropdown .dropdown-menu-right .all-notification {
  border-color: #3e454d;
}

#user-activity .nav-tabs .nav-link {
  border-color: #3e454d;
}

.list-group-item-action {
  color: #b7b7b7;
}

.list-group-item-action:focus,
.list-group-item-action:hover,
.list-group-item-action:focus {
  background-color: #24292d;
  border-color: #24292d;
}

.list-group-item.active {
  color: #fff;
  border-color: #43c4d3;
}

.list-group-item.active:focus,
.list-group-item.active:hover,
.list-group-item.active:focus {
  background-color: #43c4d3;
  border-color: #43c4d3;
  color: #fff;
}

.swal2-popup {
  background: #2f363e;
}

.header {
  background-color: #000000;
}

.header-left input {
  background: #24292d !important;
  border-color: transparent;
  color: #fff !important;
}

.header-left input:focus {
  box-shadow: none;
  border-color: #43c4d3;
}

.header-left input::placeholder {
  color: #fff;
}

.header-left .search_icon {
  background: #24292d !important;
}

.header-left .search_icon i {
  color: #fff;
}

.header-right .right-sidebar a {
  color: #43c4d3;
  border-color: #3e454d;
}

.header-right .header-profile>a.nav-link .header-info strong {
  color: #fff;
}

.header-right .notification_dropdown .nav-link {
  background: #24292d;
}

.header-right .dropdown .nav-link {
  color: #fff;
  background: #2f363e;
}

.header-right .dropdown .nav-link:hover {
  color: #fff;
}

.header-right .notification_dropdown .dropdown-item a {
  color: #fff;
}

.nav-header,
.nav-control {
  background-color: #2f363e;
}

.nav-control {
  color: #fff;
}

.brand-logo {
  color: #fff;
}

.brand-logo:hover {
  color: #fff;
}

.nav-header,
.nav-control {
  background-color: #110e15;
}

.nav-control {
  color: #fff;
  background: transparent;
}

.brand-logo {
  color: #fff;
}

.brand-logo:hover {
  color: #fff;
}

[data-theme-version="dark"][data-sidebar-style="mini"] .deznav .metismenu li>ul {
  background-color: #2f363e;
}

.fixed-content-box {
  background-color: #2f363e;
}

.fixed-content-box .head-name {
  background: #2f363e;
  color: #fff;
  border-color: #3e454d;
}

.fixed-content-box+.header+.deznav {
  background-color: #24292d;
}

.deznav {
  background-color: #100e14;
}

.deznav .metismenu>li>a {
  color: #fff;
}

.deznav .metismenu>li:hover>a,
.deznav .metismenu>li:focus>a,
.deznav .metismenu>li.mm-active>a {
  color: #fff;
}

.deznav .metismenu>li:hover>a::after,
.deznav .metismenu>li:focus>a::after,
.deznav .metismenu>li.mm-active>a::after {
  border-color: #fff;
}

.deznav .metismenu>li.mm-active ul ul {
  background-color: transparent;
}

.deznav .metismenu ul:after {
  background-color: #3e454d;
}

.deznav .metismenu ul a:hover,
.deznav .metismenu ul a:focus,
.deznav .metismenu ul a.mm-active {
  color: #fff;
}

.deznav .metismenu ul a:before {
  background-color: #fff;
}

.deznav .metismenu a {
  color: #b3b3b3;
}

.deznav .metismenu .has-arrow:after {
  border-color: #fff;
}

.sidebar-right {
  background-color: #2b3136;
}

.sidebar-right .nav-tabs {
  background-color: #2b3136;
  border-bottom: 1px solid #24292d;
}

.sidebar-right .nav-tabs .nav-link.active {
  background-color: #24292d;
}

.footer {
  background-color: transparent;
}

.footer .copyright {
  background-color: transparent;
}

.footer .copyright p {
  color: #fff;
}


/*# sourceMappingURL=style.css.map */

.coin-select {
  max-width: 30px;
  margin-right: 5px;
  background-color: #000;
  border-radius: 50%;
  padding: 3px;
}

img.coin-select {
  border-radius: 50%;
  /* border: 2px solid #43c4d3; */
  margin-right: 6px;
}

.authincation {
  margin-top: 100px;
}

.authincation img {
  max-width: 230px;
}

span.nav-text.comingsoon {
  color: #4e4e4e;
}


.hr-custom {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.switch {
  content: "\f362";
  background: #000000;
  padding: 20px;
  border-radius: 40px;
  color: white;
  position: absolute;
  margin-top: -37px;
  border: 1px solid #222222;
}

.footer {
  position: fixed;
  bottom: 20px;
  /* left: 0px; */
  color: #ffff;
  z-index: 4;
  bottom: 35px;
  right: 10px;
  text-align: left;
}

.token-balance-list {
  display: flex;
  justify-content: space-between;
}

.sub-blue {
  color: #ff00c9;
}

.main-pink {
  color: #ff00cc !important;
}

.glow-pink {
  color: #ff00cc !important;
}

.sosx-img {
  vertical-align: middle;
  border-style: none;
  width: 50px;
}

.referral-rewards {
  width: 100px !important;
  /* position: absolute; */
  right: 30px;
}

.steps-img {
  width: 190px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


/*
CSS for the main interaction
*/

.tabset>input[type="radio"] {
  position: absolute;
  left: -200vw;
}

.tabset .tab-panel {
  display: none;
}

.tabset>input:first-child:checked~.tab-panels>.tab-panel:first-child,
.tabset>input:nth-child(3):checked~.tab-panels>.tab-panel:nth-child(2),
.tabset>input:nth-child(5):checked~.tab-panels>.tab-panel:nth-child(3),
.tabset>input:nth-child(7):checked~.tab-panels>.tab-panel:nth-child(4),
.tabset>input:nth-child(9):checked~.tab-panels>.tab-panel:nth-child(5),
.tabset>input:nth-child(11):checked~.tab-panels>.tab-panel:nth-child(6) {
  display: block;
}


/*
Styling
*/

.tabset>label {
  position: relative;
  display: inline-block;
  padding: 10px;
  border: 1px solid transparent;
  border-bottom: 0;
  cursor: pointer;
  font-weight: 600;
  border-radius: 10px 10px 0px 0px;
}

.tabset>label::after {
  position: absolute;
  left: 15px;
  bottom: 10px;
  width: 22px;
  height: 4px;
  background: #8d8d8d;
}

.tabset>label:hover,
.tabset>input:focus+label {
  color: #06c;
}

.tabset>label:hover::after,
.tabset>input:focus+label::after,
.tabset>input:checked+label::after {
  background: #06c;
}

.tabset>input:checked+label {
  border-color: #ccc;
  border-bottom: 1px solid #000;
  margin-bottom: -1px;
}

.tab-panel {
  padding: 30px 0;
  border-top: 1px solid #ccc;
}


/*
Demo purposes only
*/

*,
*:before,
*:after {
  box-sizing: border-box;
}

.tabset {
  /* max-width: 65em; */
}

.inputrule[type=text],
select,
textarea {
  padding: 12px;
  width: 70%;
  /* border: 2px solid #6d6d6d; */
  border-radius: 0.75rem;
  resize: vertical;
  background-color: #d9d9d9;
  font-size: 20px;
}

.input1[type=text],
select,
textarea {
  width: 100%;
  padding: 15px;
  border-radius: 0.75rem;
  resize: vertical;
  color: #100e15 !important;
}

.label1 {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

.input1[type=submit] {
  background-color: #04AA6D;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}


/* Clear floats after the columns */

.row:after {
  content: "";
  display: table;
  clear: both;
}


/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */

@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  .input1[type=submit] {
      width: 100%;
      margin-top: 0;
  }
}

.height-game {
  height: calc(100vh-320px);
}

.card2 {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 100px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.75rem;
  width: 300px;
  transition: all 0.3s linear;
  box-shadow: 0 0 0px #ccc;
}

.card2:hover {
  -moz-box-shadow: 0 0 30px #ccc;
  -webkit-box-shadow: 0 0 30px #ccc;
  box-shadow: 0 0 30px #ccc;
}

.card2.white1 {
  background: #bbff704d;
  border-color: #bbff70 !important;
  box-shadow: 0px 0px 20px 0px #bbff704d !important;
}

.createchallenge {
  background-image: url("../images/create-challenge-img.png") !important;
  background-size: cover !important;
  background-position: center !important;
}

.rankwallet {
  float: right;
  /* color: red; */
  font-size: 21px;
  position: absolute;
  right: 37px;
}

.ranknum {
  float: right;
  /* color: red; */
  font-size: 21px;
  position: absolute;
  left: 37px;
}

.blueprint-header-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blueprint-header-display span {
  font-size: 14px;
  text-transform: capitalize;
  min-width: 18px;
  text-align: right;
}

.trader-display {
  margin-bottom: 1.2rem;
  /* background-color: #303023; */
  padding: 5px;
  border-radius: 6px;
  color: white;
  /* padding: 15px; */
  /* box-shadow: rgb(22 22 22) 0px 2px 10px; */
}

.card-small-text {
  font-size: 12px;
  text-transform: uppercase;
  color: #747474;
}

.blueprint-img-sm {
  width: 34px;
  height: 34px;
  border: 1px solid #ff00c9;
  margin-right: 5px;
}

.videos img {
  width: 100%;
  height: auto;
}

a.video {
  float: left;
  position: relative;
}

a.video span {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 5px;
  background: url("../path-to-your-image/play-btn.png") no-repeat;
  background-position: 50% 50%;
  background-size: 300%;
}

@media screen and (max-width: 480px) {
  a.video span {
      background-size: 400%;
  }
}

.play-btn {
  position: absolute;
  max-width: 700px;
  width: 70px;
  height: 70px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  line-height: 1;
  /* needed if using Bootstrap */
  text-align: center;
  color: #eaeaea;
  background-color: rgba(255, 255, 255, .4);
  border-radius: 50px;
  transition: color, background-color .2s ease;
}

.play-btn:hover,
.play-btn:focus {
  color: #000;
  background-color: rgba(255, 255, 255, .8);
  cursor: pointer;
}

.play-btn::after {
  /*
Font Awesome recommends these styles
https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements
*/
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  /*
Define the font family, weight, and icon
*/
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 40px;
  content: "\f04b";
  /* positioning tweaks */
  padding-top: 15px;
  /* padding-left: 10px; */
}

.tabs {
  position: relative;
  /* margin: 3rem 0; */
  /* background: #1abc9c; */
  height: 14.75rem;
}

.tabs::before,
.tabs::after {
  content: "";
  display: table;
}

.tabs::after {
  clear: both;
}

.tab {
  float: left;
}

.tab-switch {
  display: none;
}

.tab-label {
  position: relative;
  display: block;
  line-height: 2.75em;
  height: 3em;
  padding: 0 1.618em;
  color: #fff;
  cursor: pointer;
  top: 0;
  transition: all 0.25s;
}

.tab-label:hover {
  top: -0.25rem;
  transition: top 0.25s;
}

.tab-content {
  position: absolute;
  z-index: 1;
  top: 2.75em;
  left: 0;
  padding: 1.618rem;
  background: #111116;
  opacity: 0;
  transition: all 0.35s;
  border-radius: 0 0.75rem 0.75rem 0.75rem;
  width: 100%;
}

.tab-content h4 {
  font-size: 16px;
}

.tab-content span {
  font-size: 14px;
}

.tab-content p {
  font-size: 14px;
}

.tab-switch:checked+.tab-label {
  background: #ff00cb;
  color: #ffffff;
  border-bottom: 0;
  border-radius: 10px 10px 0 0;
  transition: all 0.35s;
  z-index: 1;
  /* top: -0.0625rem; */
}

.tab-switch:checked+label+.tab-content {
  z-index: 2;
  opacity: 1;
  transition: all 0.35s;
}

.card3 {
  margin-bottom: 1.875rem;
  background-color: rgb(17 17 22);
  transition: all .5s ease-in-out;
  position: relative;
  border: 0px solid transparent;
  border-radius: 0.75rem;
  box-shadow: 0px 12px 33px 0px rgba(62, 73, 84, 0.08);
  /* height: calc(100% - 30px); */
}

@media only screen and (max-width: 575px) {
  .card3 {
      margin-bottom: 0.938rem;
      height: calc(100% - 0.938rem);
  }
}

.card3-body {
  padding: 1.375rem;
}

@media only screen and (max-width: 575px) {
  .card3-body {
      padding: 1rem;
  }
}

.card3-title {
  font-size: 20px;
  font-weight: 500;
  color: #000;
  text-transform: capitalize;
}

.card3-title--large {
  font-size: 1.5rem;
}

.card3-title--medium {
  font-size: 1rem;
}

.card3-title--small {
  font-size: 0.875rem;
}

.card3-header {
  border-color: #d7dae3;
  position: relative;
  background: transparent;
  padding: 1.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media only screen and (max-width: 575px) {
  .card3-header {
      padding: 1.25rem 1rem 1.25rem;
  }
}

.card3-header {
  border-color: #3e454d;
}

.card3-header .card3-title {
  margin-bottom: 0px;
}

.card3-header .subtitle {
  padding-top: 5px;
  font-size: 14px;
  line-height: 1.5;
}

.card3-footer {
  border-color: #d7dae3;
  background: #12161b;
  padding: 1.25rem 1.875rem 1.25rem;
}

.card3-footer {
  border-color: #3e454d;
}

.feature-box {
  /* background-color: #48484863; */
  padding: 30px;
  border-radius: 10px;
  /* margin-top: 30px; */
  /* margin-bottom: 30px; */
  display: flex;
  align-items: center;
  height: 100px;
  /* text-align: center; */
}

.feature-icon {
  max-width: 60px;
  margin-right: 25px;
}

.feature-text {
  display: inline-block;
}

.feature-text h3 {
  font-size: 30px;
  font-weight: 500;
}

.border {
  border: 1px solid;
}

.game-timer {
  position: absolute;
  z-index: 1;
  font-family: 'digital-7', sans-serif;
  top: 29px;
  left: 99px;
  font-size: 1.9vw;
}

.unactive-timer {
  color: #4c4c4c;
}

.bg-pink {
  background-color: #ff00cc;
}

.digital-font {
  font-family: 'digital-7', sans-serif;
}

.arrow-icon {
  content: "\f362";
  font-size: 30px;
  background: #000000;
  padding: 15px;
  border-radius: 40px;
  color: white;
  position: absolute;
  margin-top: -260PX;
  right: -30px;
  z-index: 1;
  border: 1px solid #222222;
}

.postimg {
  /* border: 2px solid #404040; */
  margin-bottom: 10px;
}

.postcaption {
  /* border: 2px solid #40404024; */
  border-radius: 10px;
  padding: 20px;
  min-height: 181px;
  background-color: #000000;
}

.postcaption p {
  color: #424242;
  font-size: 15px;
  font-family: 'arial';
  line-height: 21px;
}

.reward-box i.fab {
  padding-right: 10px;
  color: #ffffff;
  margin-bottom: 10px;
}

.reward-box span {
  font-weight: 500;
  color: #ffffff;
}

.reward-box {
  background-color: #000000;
  color: #fff;
  padding: 16px 11px 10px 25px;
  border-radius: 10px;
  /* margin-bottom: 20px; */
}

.nav2 {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav2-link {
  display: block;
  padding: 0rem 0rem;
}

.nav2-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav2-tabs .nav2-item {
  margin-bottom: -1px;
}

.nav2-tabs .nav2-link {
  padding: 15px;
  border: 1px solid transparent;
  /* border-top-left-radius: 0.75rem; */
  font-weight: 500;
  /* border-top-right-radius: 0.75rem; */
}

.nav2-tabs .nav2-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav2-tabs .nav2-link.active,
.nav2-tabs .nav2-item.show .nav2-link {
  color: #ffffff;
  background-color: #ff00cb;
  /* border-color: #dee2e6 #dee2e6 #F6FBF8; */
}

.nav2-justified>.nav2-link,
.nav2-justified .nav2-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.nav-link:hover,
.nav-link:focus {
  text-decoration: none;
  background-color: #660853;
}

.nav3 {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav3-link {
  display: block;
  padding: 0rem 0rem;
}

.nav3-link:hover,
.nav3-link:focus {
  text-decoration: none;
  background-color: #660853;
}

.nav3-link.disabled {
  color: #6c757d;
  pointer-events: none;
  cursor: default;
}

.nav3-tabs {
  /* border-bottom: 1px solid #dee2e6; */
}

.nav3-tabs .nav3-item {
  margin-bottom: -1px;
}

.nav3-tabs .nav3-link {
  padding: 15px;
  border: 1px solid transparent;
  /* border-top-left-radius: 0.75rem; */
  font-weight: 500;
  /* border-top-right-radius: 0.75rem; */
}

.nav3-tabs .nav3-link:hover,
.nav3-tabs .nav3-link:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

.nav3-tabs .nav3-link.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

.nav3-tabs .nav3-link.active,
.nav3-tabs .nav3-item.show .nav3-link {
  color: #ffffff;
  background-color: #ff00cb;
  /* border-color: #dee2e6 #dee2e6 #F6FBF8; */
}

.nav3-justified>.nav3-link,
.nav3-justified .nav3-item {
  flex-basis: 0;
  flex-grow: 1;
  text-align: center;
}

.adspace-cmpny-img {
  width: 100% !important;
  min-width: 80px !important;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0 !important;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.lh45 {
  line-height: 45px;
}

.lh50 {
  line-height: 50px;
}

@media (min-width: 768px) {
  .mobile-nav {
      display: none;
  }
}

.clock .li span {
  font-family: 'digital-7', sans-serif;
}

@media (max-width: 991px) {
  .adspace-cmpny-img {
      width: 30% !important;
      min-width: 150px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 15px;
  }
}

@media (max-width: 768px) {
  .h3-mobile {
      font-size: 16px;
  }
  .btn-primary {
      color: #fff;
      font-size: 10px !important;
      background-color: #ff00cc;
      border-color: #ff00cc;
      
  }
  .btn-outline-primary {
      color: #ff00c9;
      border-color: #ff00c9;
      width: 100%;
  }
  .content-body {
      margin-left: 0 !important;
      margin-top: 70px !important;
  }
  .mobile-hide {
      display: none;
  }
  .mobile-hide-card {
      display: none !important;
  }
  .metismenu {
      display: none;
  }
  .mobile-nav {
      display: flex;
      position: fixed;
      bottom: 0;
      display: flex;
      flex-direction: row;
      z-index: 10;
      background: #111117;
      width: 100%;
      justify-content: space-evenly;
      padding: 12px;
  }
  .mobile-nav span {
      /* display:none; */
      font-size: 10px;
      display: block;
      margin-top: 10px;
  }
  .mobile-nav li {
      /* margin:10px; */
      align-items: center;
      text-align: center;
      color: white;
  list-style: none;}
  .nav-header {
      background: transparent !important;
  }
}

.select-special {
  left: 0;
  padding-left: 0;
  margin-left: 0;
}

.clock .body {
  align-items: center;
  display: flex;
}

.clock .li span {
  display: block;
  font-size: 65px;
  line-height: 75px !important;
  color: #fff;
  margin-bottom: 8px !important;
}

.clock .li {
  display: inline-block;
  font-family: 'digital-7', sans-serif;
  font-size: 0.9rem;
  list-style-type: none;
  text-transform: uppercase;
  color: #fff;
  margin-top: 0px;
  margin-bottom: 0;
  text-align: center;
}

.aboutus-title {
  color: #ffffff;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2em;
  padding-bottom: 60px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.socialxmedia-about-sec {
  width: 100%;
  position: relative;
  padding: 0px 30px 0px 30px;
  /* margin-top: 140px; */
  margin-bottom: 50px;
}

.title-icon {
  width: 20px;
  margin-right: 10px;
}

.socialxmedia-about-sec h3 {
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.socialxmedia-about-sec h4 {
  color: #ff00cc;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  padding-bottom: 40px;
  padding-top: 15px;
}

.socialxmedia-about-sec p {
  font-size: 16x;
  font-weight: 500;
  padding-bottom: 30px;
  color: #fff;
}

.socialxmedia-about-sec img {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  /* padding: 10px; */
}

.mining-about-sec {
  width: 100%;
  /* overflow: hidden; */
  /* position: relative; */
  padding: 0px 30px 0px 30px;
  margin-top: 100px;
  margin-bottom: 70px;
}

.mining-about-sec h3 {
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.mining-about-sec h4 {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.mining-about-sec p {
  font-size: 16x;
  font-weight: 500;
  /* padding-bottom: 50px; */
  color: #fff;
}

.mining-about-sec img {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  /* padding: 10px; */
}

.oxgame-about-sec {
  width: 100%;
  /* overflow: hidden; */
  /* position: relative; */
  padding: 0px 30px 0px 30px;
  margin-top: 100px;
  margin-bottom: 70px;
}

.oxgame-about-sec h3 {
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.oxgame-about-sec h4 {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.oxgame-about-sec p {
  font-size: 16x;
  font-weight: 500;
  /* padding-bottom: 50px; */
  color: #fff;
}

.oxgame-about-sec img {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  /* padding: 10px; */
}

.oxabout-btn {
  background-color: #ff00cc;
  color: #fff;
  padding: 20px;
  border-radius: 15px;
  z-index: 1;
  margin-top: 20px;
}

.nft-about-sec {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0px 30px 0px 30px;
  margin-top: 100px;
  margin-bottom: 50px;
}

.nft-about-sec h3 {
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.nft-about-sec h4 {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.nft-about-sec p {
  font-size: 16x;
  font-weight: 500;
  /* padding-bottom: 50px; */
  color: #fff;
}

.nft-about-sec img {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  /* padding: 10px; */
}

.adspace-about-sec {
  width: 100%;
  /* overflow: hidden; */
  /* position: relative; */
  padding: 0px 30px 0px 30px;
  margin-top: 100px;
  margin-bottom: 50px;
}

.adspace-about-sec h3 {
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.adspace-about-sec h4 {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.adspace-about-sec h5 {
  color: #ff00cc;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  padding-bottom: 10px;
  padding-top: 15px;
}

.adspace-about-sec p {
  font-size: 16x;
  font-weight: 500;
  /* padding-bottom: 50px; */
  color: #fff;
}

.adspace-about-sec img {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  /* padding: 10px; */
}

.prtnr-about-sec {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0px 30px 0px 30px;
  margin-top: 100px;
  margin-bottom: 0px;
}

.prtnr-about-sec h3 {
  color: #ffffff;
  font-weight: 700;
  font-size: 30px;
  line-height: 1.2em;
  padding-bottom: 20px;
  padding-top: 5px;
  text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
}

.prtnr-about-sec h4 {
  color: #ff00cc;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.2em;
  padding-bottom: 40px;
  padding-top: 15px;
}

.prtnr-about-sec p {
  font-size: 16x;
  font-weight: 500;
  padding-bottom: 30px;
  color: #fff;
}

.prtnr-about-sec img {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  border-radius: 15px;
  /* padding: 10px; */
}

@media (max-width:768px) {
  .aboutus-title {
      color: #ffffff;
      font-weight: 700;
      font-size: 25px;
      line-height: 1.2em;
      text-align: center;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .socialxmedia-about-sec {
      width: 100%;
      position: relative;
      padding: 0px 30px 0px 30px;
      margin-top: 50px;
      text-align: center;
      margin-bottom: 30px;
  }
  .socialxmedia-about-sec h3 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .socialxmedia-about-sec h4 {
      color: #ff00cc;
      font-weight: 700;
      font-size: 15px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 15px;
  }
  .socialxmedia-about-sec p {
      font-size: 10px;
      font-weight: 500;
      padding-bottom: 30px;
      color: #fff;
  }
  .socialxmedia-about-sec img {
      width: 100%;
      max-width: 110px;
      display: block;
      margin: 7px;
      margin-bottom: 10px;
      border-radius: 5px;
      /* padding: 10px; */
  }
  .mining-about-sec {
      width: 100%;
      /* overflow: hidden; */
      /* position: relative; */
      padding: 0px 30px 0px 30px;
      margin-top: 30px;
      margin-bottom: 30px;
      text-align: center;
  }
  .mining-about-sec h3 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .mining-about-sec h4 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .mining-about-sec p {
      font-size: 10px;
      font-weight: 500;
      /* padding-bottom: 50px; */
      color: #fff;
  }
  .mining-about-sec img {
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      border-radius: 15px;
      /* padding: 10px; */
  }
  .oxgame-about-sec {
      width: 100%;
      /* overflow: hidden; */
      /* position: relative; */
      padding: 0px 30px 0px 30px;
      margin-top: 30px;
      margin-bottom: 20px;
      text-align: center;
  }
  .oxgame-about-sec h3 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .oxgame-about-sec h4 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .oxgame-about-sec p {
      font-size: 10px;
      font-weight: 500;
      /* padding-bottom: 50px; */
      color: #fff;
  }
  .oxgame-about-sec img {
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      border-radius: 15px;
      /* padding: 10px; */
  }
  .oxabout-btn {
      background-color: #ff00cc;
      color: #fff;
      padding: 20px;
      border-radius: 15px;
      z-index: 1;
      margin-top: 20px;
  }
  .nft-about-sec {
      width: 100%;
      overflow: hidden;
      position: relative;
      padding: 0px 30px 0px 30px;
      margin-top: 30px;
      margin-bottom: 30px;
      text-align: center;
  }
  .nft-about-sec h3 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .nft-about-sec h4 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .nft-about-sec p {
      font-size: 1.5vh;
      font-weight: 500;
      /* padding-bottom: 50px; */
      color: #fff;
  }
  .nft-about-sec img {
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      border-radius: 15px;
      /* padding: 10px; */
  }
  .adspace-about-sec {
      width: 100%;
      /* overflow: hidden; */
      /* position: relative; */
      padding: 0px 30px 0px 30px;
      margin-top: 30px;
      margin-bottom: 30px;
      text-align: center;
  }
  .adspace-about-sec h3 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .adspace-about-sec h4 {
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .adspace-about-sec h5 {
      color: #ff00cc;
      font-weight: 700;
      font-size: 1.6vh;
      line-height: 1.2em;
      padding-bottom: 10px;
      padding-top: 15px;
  }
  .adspace-about-sec p {
      font-size: 10px;
      font-weight: 500;
      /* padding-bottom: 50px; */
      color: #fff;
  }
  .adspace-about-sec img {
      width: 100%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 10px;
      border-radius: 15px;
      /* padding: 10px; */
  }
  .prtnr-about-sec {
      width: 100%;
      overflow: hidden;
      position: relative;
      padding: 0px 30px 0px 30px;
      margin-top: 30px;
      margin-bottom: 0px;
  }
  .prtnr-about-sec h3 {
      color: #ffffff;
      font-weight: 700;
      font-size: 2vh;
      line-height: 1.2em;
      text-align: center;
      padding-bottom: 20px;
      padding-top: 5px;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
  .prtnr-about-sec h4 {
      color: #ff00cc;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.2em;
      padding-bottom: 40px;
      padding-top: 15px;
  }
  .prtnr-about-sec p {
      font-size: 16x;
      font-weight: 500;
      padding-bottom: 30px;
      color: #fff;
  }
  .prtnr-about-sec img {
      width: 100%;
      max-width: 166px;
      display: block;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 10px;
      border-radius: 15px;
      /* padding: 10px; */
  }
}

@media (max-width: 768px) {
  .mobile-hide {
      display: none;
  }
}

@media (min-width: 768px) {
  .mobile-show {
      display: none;
  }
}

@media (max-width: 991px) {
   :root {
      --card-game-width: 100% !important;
  }
  .mobile-hide-card {
      display: none !important;
  }
  .card-game-1 {
      background-image: url("../images/create-challenge-img-mob.png") !important;
  }
  .card-game-2 {
      background-image: url("../images/vote-challenge-img-mob.png") !important;
  }
  .card-game-3 {
      background-image: url("../images/the-challenge-img-mob.png") !important;
  }
}

@media (min-width: 991px) {
  .mobile-show-card {
      display: none !important;
  }
}

@media (max-width: 991px) {
  .card2 {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 100px;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border-radius: 0.75rem;
      width: 100%;
  }
}

@media (max-width: 768px) {
  .steps-img {
      width: 65px;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }
  .referral-rewards {
      width: 100px;
      position: static;
      padding: 5px;
      width: 80px;
      margin-bottom: 5px;
  }
  .custom-padding {
      padding: 0rem 1.7rem;
  }
  .tabs {
      position: relative;
      /* margin: 3rem 0; */
      /* background: #1abc9c; */
      height: 14.75rem;
  }
  .tabs::before,
  .tabs::after {
      content: "";
      display: table;
  }
  .tabs::after {
      clear: both;
  }
  .tab {
      float: left;
  }
  .tab-switch {
      display: none;
  }
  .tab-label {
      position: relative;
      display: block;
      line-height: 2.75em;
      height: 3em;
      padding: 0 1.618em;
      /* background: #1abc9c; */
      /* border-right: 0.125rem solid #16a085; */
      color: #fff;
      cursor: pointer;
      top: 15px;
      font-size: 10px;
      transition: all 0.25s;
  }
  .tab-label:hover {
      top: -0.25rem;
      transition: top 0.25s;
  }
  .tab-content {
      /* height: 12rem; */
      position: absolute;
      z-index: 1;
      top: 2.75em;
      left: 0;
      padding: 1.618rem;
      background: #111116;
      color: #575757;
      /* border-bottom: 0.25rem solid #bdc3c7; */
      opacity: 0;
      transition: all 0.35s;
      border-radius: 0 0.75rem 0.75rem 0.75rem;
      width: 100%;
  }
  .tab-switch:checked+.tab-label {
      background: #ff00cb;
      color: #ffffff;
      border-bottom: 0;
      border-radius: 10px 10px 0 0;
      transition: all 0.35s;
      z-index: 1;
      /* top: -0.0625rem; */
  }
  .tab-switch:checked+label+.tab-content {
      z-index: 2;
      opacity: 1;
      transition: all 0.35s;
  }
  .card-header {
      position: relative;
      background: transparent;
      padding: 1.375rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .input1[type=text],
  select,
  textarea {
      width: 100%;
      padding: 10px;
      /* border: 2px solid #6d6d6d; */
      border-radius: 0.75rem;
      resize: vertical;
      color: #fff;
      background-color: #d9d9d9;
      /* margin-left: 15px; */
      /* margin-right: 14px; */
      font-size: 12px;
  }
  .nav2-tabs .nav2-link {
      padding: 15px;
      border: 1px solid transparent;
      font-weight: 500;
      font-size: 12px;
  }
  .feature-box {
      /* background-color: #48484863; */
      padding: 0px;
      border-radius: 10px;
      /* margin-top: 30px; */
      /* margin-bottom: 30px; */
      display: flex;
      align-items: center;
      height: 100%;
      /* text-align: center; */
  }
  .btn-white {
      font-size: 10px;
      padding: 10px 26px;
      /* min-width: 145px; */
      display: flex;
      border: 2px solid #ffffff;
      background-color: transparent;
      color: #ffffff;
      align-items: center;
      width: 100%;
      justify-content: center;
  }
  .feature-icon {
      max-width: 33px;
      margin-right: 28px;
  }
}

.oxgame-pinkbg {
  background-color: #ff00cb;
  display: inline-block;
  width: 100%;
}

.oxgame-pinkbg h3 {
  font-size: 20px;
  display: block;
  color: #fff;
}

.oxgame-pinkbg span {
  font-size: 10px;
  display: block;
  color: #fff;
}

.oxgame-pinkbg img {
  width: 100%;
  max-width: 60px;
}






.content-preloader {
  animation: roll 1s forwards;
}

@keyframes roll {
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
}

.game-top {
  background-color: #ff00cb;
  width: 100%;
  padding: 30px;
}

.game-top p {
  font-size: 13px;
  color: #fff;
  font-weight: 500;
}

.game-top h1 {
  font-size: 50px;
  color: #fff;
  font-weight: 600;
}

.game-top h2 {
  font-size: 20px;
  color: #fff;
  font-weight: 700;
}

.game-top img {
  width: 33px;
  margin-right: 15px;
}

.mobile-nav>.mm-active {
  color: #ff00cc;
}

@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-game-height: 26vh;
  --card-game-width: calc(var(--card-game-height) / 1.6);
}

.card-game {
  background: #191c29;
  width: var(--card-game-width);
  height: var(--card-game-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-game:hover {
  color: rgb(88 199 250 / 100%);
  transition: 1s linear;
  background-image: none !important;
  ;
}

.card-game:hover:before,
.card-game:hover:after {
  animation: none;
  opacity: 0;
}

.but::before {
  content: "";
  width: 20%;
  height: 25%;
  border-radius: 8px;
  background-image: linear-gradient(var(--rotate), #ff85d4, #bf24ff, #00fbfe);
  position: absolute;
  z-index: -1;
  left: 10px;
  bottom: -4px;
  animation: spin 2.5s linear infinite;
}

.but::after {
  position: absolute;
  content: "";
  left: -5%;
  bottom: 0;
  z-index: -1;
  height: 30%;
  width: 30%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-game-height) / 6));
  background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
  opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
      --rotate: 0deg;
  }
  100% {
      --rotate: 360deg;
  }
}

.card-game-1 {
  background-image: url("../images/create-challenge-img.png");
}

.card-game-2 {
  background-image: url("../images/vote-challenge-img.png");
}

.card-game-3 {
  background-image: url("../images/the-challenge-img.png");
}

.nav-content {
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.mm-active {
  border-top-right-radius: 50% !important;
  border-bottom-right-radius: 50% !important;
}

.step {
  width: 25px;
  height: 25px;
  background-color: #444444;
  display: inline-block;
  border: 4px solid;
  border-color: transparent;
  border-radius: 50%;
  color: #6e6e6e;
  font-weight: 600;
  text-align: center;
  line-height: 30px;
  margin-right: 10px;
  font-size: 17px;
}

@media(max-width:576px) {
  .step:nth-child(n+2) {
      margin: 0 0 0 35px !important;
  }
  .step:nth-child(n+2):before {
      width: 27px !important;
      transform: translate(-35px, 16px) !important;
  }
}

.step:first-child {
  line-height: 18px;
}

.step:nth-child(n+2) {
  margin: 0 0 0 100px;
  transform: translate(0, -4px);
}

.step:nth-child(n+2):before {
  width: 75px;
  height: 3px;
  display: block;
  background-color: white;
  transform: translate(-95px, 21px);
  content: "";
}

.step:after {
  width: 150px;
  display: block;
  transform: translate(-60px, 3px);
  color: #818698;
  content: attr(data-desc);
  font-weight: 400;
  font-size: 13px;
  cursor: pointer !important;
}

.step:first-child:after {
  transform: translate(-60px, -1px);
  cursor: pointer;
}

.step.done {
  background-color: #ff00cc;
  border-color: #ff00cc;
  color: white;
}

.step.done:before {
  background-color: #ff00cc;
}

.step.active {
  border-color: #bf24ff !important;
  color: #ff85d4 !important;
  background-color: white !important;
  z-index: -1;
}

.step.active:before {
  background: linear-gradient(to right, #ff85d4 0%, #bf24ff 100%);
}

.step.active:after {
  color: #73b5e8;
}


/* social Mining S1 */

.img-soc {
  width: auto !important;
  max-width: 350px !important;
  border-radius: 10px;
}

.card-social p {
  font-size: 14px;
  line-height: 30px;
}

@media (min-width: 769px) and (max-width: 1100px) {
  .card3-body.ranking {
      padding: 0px;
  }
  .nav3-tabs.nav-rank .nav3-link {
      padding: 6px;
  }
  .blueprint-header-display span {
      font-size: 11px;
  }
}

.foot-card {
  background-color: transparent !important;
}

.backgroun-dark {
  background-color: rgb(17 17 22);
}

.bg-pink-radius {
  background-color: #f600cc !important;
  border-radius: 5px !important;
}

.view-vid {
  position: absolute;
  bottom: 7px;
  left: 10px;
}

.game .details {}



.yel {
  background-color: #e2c700 !important;
  border-color: #e2c700 !important;
}

.CodeMirror.cm-s-easymde.CodeMirror-wrap {
  background-color: #000 !important;
  border: none !important;
  padding: 15px;
}

.editor-toolbar i.fa {
  color: #6e6e6e;
}

.editor-toolbar {
  background: #000 !important;
  border: none !important;
}

.CodeMirror.cm-s-easymde.CodeMirror-wrap {
  height: 291px !important;
  color: #fff;
  padding: 15px !important;
}

.CodeMirror-cursor {
  border-left: 1px solid rgb(255 255 255);
}

.video-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 10px;
}

.video-container::after {
  padding-top: 56.25%;
  display: block;
  content: '';
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.my-masonry-grid {
  display: flex;
  margin-left: -20px;
}

.my-masonry-grid_column {
  background-clip: padding-box;
  flex: 1;
}


/* Style your items */

.my-masonry-grid_column>div {
  /* change div to reference your elements in <masonry> */
  background: none;
  padding: 0;
  margin-bottom: 20px;
  background: #111116;
}

a {
  color: #ff00cc !important;
  font-weight: bold;
}



.flex-direction-row {
  flex-direction: row;
}

.flex-direction-column {
  flex-direction: column !important;
}

.game.container-fluid {
  gap: 20px;
  align-content: stretch;
}

p.video-title {
  margin-top: 10px;
  margin-bottom: 50px;
}

.tiktok-container {
  left: 0;
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: 161.7778%;
  padding-top: 120px;
}

.video-submission {}

.step.false.mr-3 {
  font-size: 10px;
  width: 20px;
  height: 20px;
  line-height: 13px;
}

.metismenu .mm-active a {
  color: #fff !important;
}

.ranking-header {
  border-bottom: 2px solid #ff00cc;
  padding-bottom: 10px;
  color: #f0c;
}

#ranking-section button {
  border-radius: 10px 10px 0 0;
  margin-right: 2px;
}

.tab-bg {
  border-radius: 0 0 5px 5px;
}

.d-flex.justify-content-left.mt-3 {}

.rank-item {
  border-top: 1px solid #1e2124;
  padding-bottom: 10px;
}

.stake-amount .card {
  background-image: url('https://socialx.io/img/stake.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center right;
}

.rate-amount .card {
  background-image: url('https://socialx.io/img/rate.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center right;
}

.stake-amount,
.dao-box,
.price-box,
.rate-amount {
  flex: 1 20%;
}

.stake-amount .card,
.dao-box .card,
.price-box .card,
.rate-amount .card {
  width: 100%
}

.dao-box .card {
  background-image: url('https://socialx.io/img/dao.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center right;
}

.price-box .card {
  background-image: url('https://socialx.io/img/SOSX.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center right;
}

.bg-input {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: #d9d9d9!important;
}



h2.main-pink {
  font-family: 'digital-7';
  font-size: 25px;
}

.challenge-form {
  flex: 0 80%;
}

.challenge-list {
  flex: 1 46%;
  background: #494949;
  overflow-y: scroll;
  max-height: 600px;
  height: 100%;
}

.challenge-details {
  flex: 1 47%;
  overflow-y: auto;
  max-height: 600px;
border: 2px solid #ff00cc;padding: 15px;border-radius: 5px;background: #ff00cc12;}

.list-title {
  margin-right: 20px;
  flex: 2 50%;
}

.challenge-items {
  /* border-bottom: 1px solid #efefef; */
  padding: 10px 20px;
  align-items: center;
}

.challenge-items:nth-child(even) {
  background: #00000017
}

.challenge-items:hover {
  background: #ffffff21
}

.challenge-items:active,
.challenge-items:focus {
  background: #ff00cc26
}

.list-votes {
  margin-right: 20px;
}

.challenge-details h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
.progressbar {
overflow: hidden;
/*CSS counters to number the steps*/
counter-reset: step;
/* width: 60%; */

}
.progressbar li {
list-style-type: none;
color: white;
text-transform: uppercase;
font-size: 10px;
width: 24%;
float: left;
position: relative;
text-align: center;margin: 0!important;}
.progressbar li:before {
content: counter(step);
counter-increment: step;
width: 30px;
line-height: 30px;
display: block;
font-size: 16px;
color: #333;
background: white;
border-radius: 50%;
margin: 0 auto 12px auto;
z-index: 2;font-weight: bold;}

.progressbar li:after {
content: '';
width: 100%;
height: 4px;
background: white;
position: absolute;
left: -50%;
top: 14px;
z-index: -1; 
}
.progressbar li:first-child:after {

content: none; 
}

.progressbar li.active:before,  .progressbar li.active:after{
background: rgb(255 0 204);
color: white;
}

.challenge-section {flex: 2 57%;margin-right: 30px;}

.upload-game {
  flex: 0 37%;
}
.guide-image img {
  max-height: 300px;
}










@media (max-width: 576px) {
      .clock .li span {
      font-size: 4.5rem !important;
      line-height: 75px !important;
  }
  .tab-content {
      position: absolute;
      z-index: 1;
      top: 2.75em;
      left: 0;
      padding: 1.618rem;
      background: #111116;
      opacity: 0;
      transition: all 0.35s;
      border-radius: 0 0.75rem 0.75rem 0.75rem;
      width: 100%;
  }
  .h3-mobile {
      font-size: 12px;
  }
  .tab-content h4 {   
      font-size: 9px;
      line-height: 1rem;
  }
  .tab-content span {
      font-size: 6px;
  }
  .tab-content p {
      font-size: 6px;
      line-height: 1rem;
  }
  .card span {
      font-size: 6px;
      line-height: 1rem;                                                                                    
      color: #fff;
  }
  .card h4 {
      font-size: 20px !important;
  }
  .card h3 {
      font-size: 11px !important;
  }
  .card {
      margin-bottom: 1.875rem;
      
      transition: all .5s ease-in-out;
      position: relative;
      border: 0px solid transparent;
      border-radius: 0.75rem;
      box-shadow: 0px 12px 33px 0px rgb(62 73 84 / 8%);
      padding: 15px;
  }
}

@media (max-width: 768px) {
  .footer {
      margin-bottom: 20px;
  }
  .game-top h1 {
      font-size: 35px !important;
      color: #fff;
      font-weight: 600;
  }
  .card {
      margin-bottom: 1.875rem;
      
      transition: all .5s ease-in-out;
      position: relative;
      border: 0px solid transparent;
      border-radius: 0.75rem;
      box-shadow: 0px 12px 33px 0px rgb(62 73 84 / 8%);
      padding: 15px;
  }
  .card span {
      font-size: 6px;
      line-height: 1rem;
      color: #fff;
  }
  .card h3 {
      font-size: 12px !important;
  }
  .postimg img {
      width: 300px;
      border-radius: 10px;
      /* padding: 5px; */
  }
}

@media (max-width: 992px) {
  .guide-image img {max-height: 180px;width: 100%;}

.modal-footer.guide-popup {align-items: center;display: flex;flex-flow: column;}

.header-left p {font-size: 10px!important;}



a.brand-logo {height: 70px!important;}
  .guide-image img {max-height: 180px;width: 100%;}

.modal-footer.guide-popup {align-items: center;display: flex;flex-flow: column;}
    .modal-content {
  top: 0!important;margin: 0px;z-index: 999999;text-align: center;}
  .referral-rewards {
      width: 100px;
      position: static;
      padding: 5px;
      width: 80px;
      margin-bottom: 5px;
  }
  .btn-outline-primary {
      color: #ff00c9;
      border-color: #ff00c9;
      width: 100%;
      font-size: 10px;
  }
  .btn-dark {
      background: #3e4954;
      border-color: #3e4954;
      color: #fff;
      font-size: 10px;
  }
  .btn-success {
      color: #fff;
      background-color: #2bc155;
      border-color: #2bc155;
      font-size: 10px !important;
  }
  .btn-primary {
      color: #fff;
      font-size: 12px;
      background-color: #ff00cc;
      border-color: #ff00cc;
  }
  #action-section .btn-primary {}
  .col-1,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-10,
  .col-11,
  .col-12,
  .col,
  .col-auto,
  .col-sm-1,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm,
  .col-sm-auto,
  .col-md-1,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md,
  .col-md-auto,
  .col-lg-1,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg,
  .col-lg-auto,
  .col-xl-1,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl,
  .col-xl-auto,
  .col-xxl-1,
  .col-xxl-2,
  .col-xxl-3,
  .col-xxl-4,
  .col-xxl-5,
  .col-xxl-6,
  .col-xxl-7,
  .col-xxl-8,
  .col-xxl-9,
  .col-xxl-10,
  .col-xxl-11,
  .col-xxl-12,
  .col-xxl,
  .col-xxl-auto {
      position: relative;
      width: 100%;
      padding-right: 10px;
      padding-left: 10px;
  }
  .card h3 {
      font-size: 18px;
  }
  .card span {
      font-size: 10px;
      line-height: 1rem;
      color: #fff;
  }
  .card {
      margin-bottom: 0px;
      
      transition: all .5s ease-in-out;
      position: relative;
      border: 0px solid transparent;
      border-radius: 0.75rem;
      box-shadow: 0px 12px 33px 0px rgb(62 73 84 / 8%);
      padding: 15px;
  }
  .tab-content {
      position: absolute;
      z-index: 1;
      top: 2.75em;
      left: 0;
      padding: 1.618rem;
      background: #111116;
      opacity: 0;
      transition: all 0.35s;
      border-radius: 0 0.75rem 0.75rem 0.75rem;
      width: 100%;
  }
  .tab-content h4 {
      font-size: 15px;
      line-height: 1rem;
  }
  .tab-content span {
      font-size: 10px;
      line-height: 1rem;
  }
  .tab-content p {
      font-size: 10px;
      line-height: 1rem;
  }
}

@media (max-width: 920px) {
  .game-top h1 {
      font-size: 40px;
      color: #fff;
      font-weight: 600;
  }
}

@media (max-width: 1100px) {
  .section-heading {
      font-size: 3em;
      font-weight: 700;
      /* margin: 0 0 4rem 0; */
      color: white;
      line-height: 60px;
      font-weight: 700;
      text-shadow: 0px 0px 0px #ff00cc, 0 0 25px #ff00cc, 0 0 5px #ff00cc;
  }
}


@media (min-width: 1600px) {
  .clock .li span {
      font-size: 70px;
      line-height: 75px !important;
  }
}

@media (min-width: 1700px) {
  .clock .li span {
      font-size: 4.5rem !important;
      line-height: 35px !important;
  }
}

@media (min-width: 1950px) {
  .clock .li span {
      font-size: 5rem !important;
      line-height: 75px !important;
  }
}

@media (min-width: 2170px) {
  .clock .li span {
      font-size: 6rem !important;
      line-height: 75px !important;
  }
}






@media (max-width:1100px) {
  div#timer-section,
  div#ranking-section {
      flex: 2 100% !important;
      flex-flow: column;
      max-width: none;
      max-width: 100%;
  }
  .prize-card.card,
  .timer-card.card {
      flex: 1 100% !important;
  }
}




@media (max-width: 1200px) {
  #timer-section .card {
      width: 100%!important;
  }
  .challenge-form {
      flex: 1 100%!important;
  }
}

@media (max-width: 1400px) {
  .game-top h1 {
      font-size: 45px;
      color: #fff;
      font-weight: 600;
  }
  .card h3 {
      font-size: 15px;
  }
}

@media (max-width:1500px) {
  .challenge-list {
      flex: 1 100%;
      max-height: 250px;
  }
  .challenge-details {
      flex: 1 100%;
      max-height: 600px;
  }
}


@media (max-width: 1600px) {

  #action-section.button {
      margin-bottom: 50px!important
  }
  .challenge-section {
      flex: 2 100%
  }

  .upload-game {
  flex: 0 100%;
  }
} 

@media (max-width: 1400px) {
  .game-top h1 {
      font-size: 45px;
      color: #fff;
      font-weight: 600;
  }
  .card h3 {
      font-size: 15px;
  }
}

@media (max-width:1500px) {
  .challenge-list {
      flex: 1 100%;
      max-height: 250px;
  }
  .challenge-details {
      flex: 1 100%;
      max-height: 600px;
  }
}


@media (max-width: 1600px) {

  #action-section.button {
      margin-bottom: 50px!important
  }
  .challenge-section {
      flex: 2 100%
  }

  .upload-game {
  flex: 0 100%;
  }
}

`;