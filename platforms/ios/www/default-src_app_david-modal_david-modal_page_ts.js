(self["webpackChunkcfgi_app_test"] = self["webpackChunkcfgi_app_test"] || []).push([["default-src_app_david-modal_david-modal_page_ts"],{

/***/ 7685:
/*!*************************************************!*\
  !*** ./src/app/david-modal/david-modal.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DavidModalPage": () => (/* binding */ DavidModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_david_modal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./david-modal.page.html */ 8253);
/* harmony import */ var _david_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./david-modal.page.scss */ 9662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let DavidModalPage = class DavidModalPage {
    constructor(modalCtr) {
        this.modalCtr = modalCtr;
    }
    ngOnInit() { }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const closeModal = "Modal Closed";
            yield this.modalCtr.dismiss(closeModal);
        });
    }
};
DavidModalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
DavidModalPage.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
DavidModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-david-modal',
        template: _raw_loader_david_modal_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_david_modal_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DavidModalPage);



/***/ }),

/***/ 9662:
/*!***************************************************!*\
  !*** ./src/app/david-modal/david-modal.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-list.list-ios {\n  margin-bottom: 0;\n}\n\n#result_card {\n  left: 1%;\n  width: 90%;\n  min-height: 300px;\n}\n\n#left {\n  position: relative;\n  width: 40%;\n  vertical-align: top;\n}\n\n#lawyer_avi {\n  position: relative;\n  width: 100%;\n}\n\n#right {\n  position: relative;\n  width: 40%;\n  left: 5%;\n  vertical-align: top;\n}\n\n#lawyer_title {\n  position: relative;\n  width: 100%;\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Righteous&display=swap\");\n  font-family: \"Righteous\", normal;\n  font-weight: normal;\n  font-size: 7vmin;\n  line-height: 8vmin;\n  color: #3F3356;\n}\n\n#about {\n  display: block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2.5vmin;\n  line-height: 3vmin;\n}\n\n#link {\n  width: 100%;\n  color: #1f274d;\n  border: 1px solid #1f274d;\n  border-radius: 10px;\n}\n\n#icon {\n  width: 50px;\n}\n\n#location {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 4vmin;\n  line-height: 4vmin;\n}\n\n#languages {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n}\n\n#contact {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 3vmin;\n  line-height: 3vmin;\n  width: 100%;\n  vertical-align: top;\n  font-weight: bold;\n}\n\n#hours {\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: normal;\n  font-size: 2vmin;\n  width: 100%;\n}\n\n#schedule_button {\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-weight: bold;\n  font-size: 4vmin;\n  line-height: 4vmin;\n  --background: #1f6b30 ;\n}\n\n#sophie_info {\n  width: 100%;\n  @import url(\"https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap\");\n  font-family: \"Oxygen\", sans-serif;\n  font-size: 3vmin;\n  line-height: 0.2vmin;\n}\n\nion-content {\n  --background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdmlkLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FBQVI7O0FBR0E7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUVBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRVEsOEVBQUE7RUFDUixnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRVEsb0ZBQUE7RUFDUixpQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxXQUFBO0FBSko7O0FBT0E7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDWSxvRkFBQTtFQUNSLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKSjs7QUFPQTtFQUNZLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNRLG9GQUFBO0VBQ1IsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtBQUpKIiwiZmlsZSI6ImRhdmlkLW1vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHsgIFxuICAgICYubGlzdC1pb3MgeyAgXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7ICBcbiAgICB9ICBcbn0gIFxuI3Jlc3VsdF9jYXJkIHtcbiAgICBsZWZ0OiAxJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4jbGVmdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuI2xhd3llcl9hdmkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI3JpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBsZWZ0OiA1JTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIFxufVxuI2xhd3llcl90aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJpZ2h0ZW91cyZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ1JpZ2h0ZW91cycsIG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogN3ZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDh2bWluO1xuXG4gICAgY29sb3I6ICMzRjMzNTY7XG59XG5cbiNhYm91dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDIuNXZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDN2bWluO1xufVxuXG4jbGluayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IzFmMjc0ZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMWYyNzRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNpY29uIHtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuI2xvY2F0aW9uIHtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA0dm1pbjtcbiAgICBsaW5lLWhlaWdodDogNHZtaW47XG59XG5cbiNsYW5ndWFnZXMge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDN2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAzdm1pbjtcbn1cblxuI2NvbnRhY3Qge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDN2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAzdm1pbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jaG91cnMge1xuICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDJ2bWluO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jc2NoZWR1bGVfYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PeHlnZW46d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNHZtaW47XG4gICAgbGluZS1oZWlnaHQ6IDR2bWluO1xuICAgIC0tYmFja2dyb3VuZDogIzFmNmIzMCA7XG59XG5cbiNzb3BoaWVfaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDN2bWluO1xuICAgIGxpbmUtaGVpZ2h0OiAuMnZtaW47XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */");

/***/ }),

/***/ 8253:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/david-modal/david-modal.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <!-- Back Button -->\n  <ion-row>\n    <ion-button fill=clear (click)=\"close()\" id=\"back_button\">\n      <img src=\"./assets/back_button.png\"/>\n    </ion-button>\n  </ion-row>\n\n  <ion-card id=\"result_card\"> \n    <ion-card-content>\n      <table>\n        <!-- Top row of Table: Lawyer image on left and name, location and language on right -->\n        <tr>\n          <td id=\"left\"><img id=\"lawyer_avi\" src= \"./assets/David.png\"></td>\n          <td id=\"right\"><ion-text id=\"lawyer_title\">David Val</ion-text>\n            <ion-text id=\"lawyer_title\">Verde Vargas</ion-text>\n            <ion-text id=\"location\"> Co-Founder <br> </ion-text>\n            <ion-text id=\"languages\"> CFGI </ion-text>\n          </td>\n        </tr>\n      </table>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-text id=\"sophie_info\"> David Valverde Vargas was born in Costa Rica and moved to Germany at the age of seven. He came to the U.S. as an international student. David attended Rollins College and University of Utah, majoring in International Trade and Commerce and minoring in Computer Science. David’s fascination with artificial intelligence and software led him to meeting his co-founders at Grabb-it. They participated in YCombinator’s Summer ‘18 batch and moved to Silicon Valley. David is now the founder of PRANOS.ai, the proprietary broadcast system converts your car windows into transparent HD displays. Pranos’ GRID is an ecosystem where drivers can opt in to earn as they drive through the ad revenue generated on their displays. Pranos aims to create many jobs through the growth of the gig economy.</ion-text>\n    </ion-card-content>\n  </ion-card>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_david-modal_david-modal_page_ts.js.map