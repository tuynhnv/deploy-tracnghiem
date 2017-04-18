webpackJsonp([0,3],{

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(333);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AF; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AF = (function () {
    function AF(af) {
        var _this = this;
        this.af = af;
        this.af.auth.subscribe(function (auth) {
            if (auth != null) {
                _this.user = _this.af.database.object('users/' + auth.uid);
            }
        });
        this.messages = this.af.database.list('messages');
        this.users = this.af.database.list('users');
        this.quizs = this.af.database.list('quizs');
        this.grades = this.af.database.list('grades');
        this.registeredUsers = this.af.database.list('registeredUsers');
        this.questions = this.af.database.list('questions');
    }
    /**
     * Logs in the user
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithGoogle = function () {
        return this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Popup,
        });
    };
    /**
     * Logs out the current user
     */
    AF.prototype.logout = function () {
        return this.af.auth.logout();
    };
    /**
     *
     */
    AF.prototype.addUserInfo = function () {
        //We saved their auth info now save the rest to the db.
        this.users.push({
            displayName: this.displayName,
            email: this.email,
            role: 'student',
        });
    };
    /**
     * Saves a message to the Firebase Realtime Database
     * @param text
     */
    AF.prototype.sendMessage = function (text) {
        var message = {
            message: text,
            displayName: this.displayName,
            email: this.email,
            timestamp: Date.now()
        };
        this.messages.push(message);
    };
    /**
     *
     * @param model
     * @returns {firebase.Promise<void>}
     */
    AF.prototype.registerUser = function (email, password) {
        console.log(email);
        return this.af.auth.createUser({
            email: email,
            password: password
        });
    };
    /**
     *
     * @param uid
     * @param model
     * @returns {firebase.Promise<void>}
     */
    AF.prototype.saveUserInfoFromForm = function (uid, name, email) {
        return this.af.database.object('users/' + uid).set({
            displayName: name,
            email: email,
            role: 'student',
        });
    };
    AF.prototype.addUser = function (displayName, email) {
        var user = {
            displayName: displayName,
            email: email,
            role: 'student',
        };
        return this.users.push(user);
    };
    /**
     * Logs the user in using their Email/Password combo
     * @param email
     * @param password
     * @returns {firebase.Promise<FirebaseAuthState>}
     */
    AF.prototype.loginWithEmail = function (email, password) {
        return this.af.auth.login({
            email: email,
            password: password,
        }, {
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Password,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Password,
        });
    };
    AF.prototype.chondethi = function (text) {
        return this.af.database.list('quizs', {
            query: {
                orderByChild: 'name',
                equalTo: text
            }
        });
    };
    AF.prototype.getQuestion = function (text) {
        return this.af.database.list('questions', {
            query: {
                orderByChild: 'dethi',
                equalTo: text
            }
        });
    };
    AF.prototype.sendGrade = function (mark, dethi) {
        var grade = {
            mark: mark,
            dethi: dethi,
            displayName: this.displayName,
            email: this.email,
            timestamp: Date.now()
        };
        this.grades.push(grade);
    };
    AF.prototype.getGrade = function (email) {
        return this.af.database.list('grades', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        });
    };
    AF.prototype.getdisplayName = function (email) {
        var _this = this;
        this.af.database.list('users', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        }).subscribe(function (list) {
            list.forEach(function (snapshot) {
                if (snapshot.email = email) {
                    _this.displayName = snapshot.displayName;
                }
            });
        });
        return this.displayName;
    };
    AF.prototype.getRole = function (email) {
        var _this = this;
        this.af.database.list('users', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        }).subscribe(function (list) {
            list.forEach(function (snapshot) {
                if (snapshot.email = email) {
                    _this.role = snapshot.role;
                }
            });
        });
        return this.role;
    };
    AF.prototype.addquestion = function (dethi, name, A, B, C, D, key) {
        var question = {
            dethi: dethi,
            name: name,
            A: A,
            B: B,
            C: C,
            D: D,
            key: key
        };
        this.questions.push(question);
    };
    AF = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AF);
    return AF;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/af.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {ITimer} from "./itimer";
//import {Timer} from './itimer';
var Timer = (function () {
    function Timer() {
    }
    Timer.prototype.ngOnInit = function () { };
    Timer.prototype.initTimer = function (timeInSeconds) {
        //if(!timeInSeconds) { this.timeInSeconds = 0; }
        this.seconds = timeInSeconds;
        this.runTimer = false;
        this.hasStarted = false;
        this.hasFinished = false;
        this.secondsRemaining = timeInSeconds;
        this.displayTime = this.getSecondsAsDigitalClock(this.secondsRemaining);
    };
    Timer.prototype.startTimer = function () {
        this.hasStarted = true;
        this.runTimer = true;
        this.timerTick();
    };
    Timer.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.runTimer) {
                return;
            }
            _this.secondsRemaining--;
            _this.displayTime = _this.getSecondsAsDigitalClock(_this.secondsRemaining);
            if (_this.secondsRemaining > 0) {
                _this.timerTick();
            }
            else {
                _this.hasFinished = true;
            }
        }, 1000);
    };
    Timer.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    Timer.prototype.pauseTimer = function () {
        this.runTimer = false;
    };
    Timer.prototype.resumeTimer = function () {
        this.startTimer();
    };
    Timer = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], Timer);
    return Timer;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/time.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(509);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_mathjax__ = __webpack_require__(523);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddquestionPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddquestionPageComponent = (function () {
    function AddquestionPageComponent(afService) {
        this.afService = afService;
        this.alert = false;
        this.equationTexString = "$\frac 12$";
        this.quizs = this.afService.quizs;
        this.content = '<p>Hello <strong>World !</strong></p>';
    }
    AddquestionPageComponent.prototype.ngOnInit = function () {
        // CKEDITOR.replace( 'editor1', {
        // 	extraPlugins: 'mathjax',
        // 	mathJaxLib: 'http://cdn.mathjax.org/mathjax/2.6-latest/MathJax.js?config=TeX-AMS_HTML',
        // 	height: 320
        // } );
        // if ( CKEDITOR.env.ie && CKEDITOR.env.version == 8 ) {
        // 	document.getElementById( 'ie8-warning' ).className = 'tip alert';
        // }
        //MathJax.Hub.Queue(["Typeset",MathJax.Hub,"MathJax"]);
    };
    AddquestionPageComponent.prototype.addquestion = function (event, dethi, name, A, B, C, D, key) {
        event.preventDefault();
        this.afService.addquestion(dethi, name, A, B, C, D, key);
        this.alert = true;
    };
    AddquestionPageComponent.prototype.reset = function () {
        this.alert = false;
    };
    AddquestionPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addquestion-page',
            template: __webpack_require__(705),
            styles: [__webpack_require__(684)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_mathjax__["a" /* MathJaxDirective */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], AddquestionPageComponent);
    return AddquestionPageComponent;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/addquestion-page.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    //public registeredUsers: Object;
    function AppComponent(afService, router) {
        var _this = this;
        this.afService = afService;
        this.router = router;
        // This asynchronously checks if our user is logged it and will automatically
        // redirect them to the Login page when the status changes.
        // This is just a small thing that Firebase does that makes it easy to use.
        this.afService.af.auth.subscribe(function (auth) {
            if (auth == null) {
                console.log("Not Logged in.");
                _this.isLoggedIn = false;
                _this.router.navigate(['login']);
            }
            else {
                console.log("Successfully Logged in.");
                // check nếu role= user, 
                // Set the Display Name and Email so we can attribute messages to them
                if (auth.google) {
                    _this.afService.addUser(auth.google.displayName, auth.google.email);
                    _this.afService.displayName = auth.google.displayName;
                    _this.afService.email = auth.google.email;
                }
                else {
                    _this.afService.email = auth.auth.email;
                    _this.afService.displayName = _this.afService.getdisplayName(_this.afService.email);
                }
                _this.afService.role = _this.afService.getRole(_this.afService.email);
                _this.isLoggedIn = true;
                _this.router.navigate(['']);
            }
        });
    }
    // getdisplayName(email: string){
    //     this.afService.registerUsers.subscribe(list => {
    //      list.forEach(snapshot=> {
    //         if(snapshot.email = email) {
    //           this.afService.displayName = snapshot.name;
    //         }
    //         console.log(this.afService.displayName);
    //      })
    //     });
    //}
    AppComponent.prototype.logout = function () {
        this.afService.logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(706),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ckeditor__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_page_login_page_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_af__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_time__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__registration_page_registration_page_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__quiz_page_quiz_page_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pagination__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_pagination__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__grade_page_grade_page_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__addquestion_page_addquestion_page_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_management_user_management_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__quiz_management_quiz_management_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__grade_management_grade_management_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__question_management_question_management_component__ = __webpack_require__(516);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var firebaseConfig = {
    apiKey: "AIzaSyDpcHqGHomwkl2oNAIEFAaDr58jqW40pJg",
    authDomain: "push-example-921a8.firebaseapp.com",
    databaseURL: "https://push-example-921a8.firebaseio.com",
    storageBucket: "push-example-921a8.appspot.com",
    messagingSenderId: "415083462802"
};
var routes = [
    // { path: '', component: HomePageComponent },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__registration_page_registration_page_component__["a" /* RegistrationPageComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__quiz_page_quiz_page_component__["a" /* QuizPageComponent */] },
    { path: 'grade', component: __WEBPACK_IMPORTED_MODULE_14__grade_page_grade_page_component__["a" /* GradePageComponent */] },
    { path: 'addquestion', component: __WEBPACK_IMPORTED_MODULE_15__addquestion_page_addquestion_page_component__["a" /* AddquestionPageComponent */] },
    { path: 'usermanagement', component: __WEBPACK_IMPORTED_MODULE_16__user_management_user_management_component__["a" /* UserManagementComponent */] },
    { path: 'quizmanagement', component: __WEBPACK_IMPORTED_MODULE_17__quiz_management_quiz_management_component__["a" /* QuizManagementComponent */] },
    { path: 'grademanagement', component: __WEBPACK_IMPORTED_MODULE_18__grade_management_grade_management_component__["a" /* GradeManagementComponent */] },
    { path: 'questionmanagement', component: __WEBPACK_IMPORTED_MODULE_19__question_management_question_management_component__["a" /* QuestionManagementComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_13_ng2_pagination__["Ng2PaginationModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__login_page_login_page_component__["a" /* LoginPageComponent */], __WEBPACK_IMPORTED_MODULE_9__home_page_home_page_component__["a" /* HomePageComponent */], __WEBPACK_IMPORTED_MODULE_11__registration_page_registration_page_component__["a" /* RegistrationPageComponent */], __WEBPACK_IMPORTED_MODULE_12__quiz_page_quiz_page_component__["a" /* QuizPageComponent */], __WEBPACK_IMPORTED_MODULE_14__grade_page_grade_page_component__["a" /* GradePageComponent */], __WEBPACK_IMPORTED_MODULE_15__addquestion_page_addquestion_page_component__["a" /* AddquestionPageComponent */], __WEBPACK_IMPORTED_MODULE_16__user_management_user_management_component__["a" /* UserManagementComponent */], __WEBPACK_IMPORTED_MODULE_17__quiz_management_quiz_management_component__["a" /* QuizManagementComponent */], __WEBPACK_IMPORTED_MODULE_18__grade_management_grade_management_component__["a" /* GradeManagementComponent */], __WEBPACK_IMPORTED_MODULE_19__question_management_question_management_component__["a" /* QuestionManagementComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__providers_af__["a" /* AF */], __WEBPACK_IMPORTED_MODULE_8__providers_time__["a" /* Timer */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradeManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GradeManagementComponent = (function () {
    function GradeManagementComponent(afService) {
        this.afService = afService;
        this.grades = this.afService.grades;
    }
    GradeManagementComponent.prototype.ngOnInit = function () {
    };
    GradeManagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grade-management',
            template: __webpack_require__(707),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], GradeManagementComponent);
    return GradeManagementComponent;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/grade-management.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GradePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GradePageComponent = (function () {
    function GradePageComponent(afService) {
        this.afService = afService;
        this.grades = this.afService.getGrade(this.afService.email);
    }
    GradePageComponent.prototype.ngOnInit = function () {
    };
    GradePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-grade-page',
            template: __webpack_require__(708),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], GradePageComponent);
    return GradePageComponent;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/grade-page.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(afService) {
        this.afService = afService;
        this.messages = this.afService.messages;
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    HomePageComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    HomePageComponent.prototype.sendMessage = function () {
        this.afService.sendMessage(this.newMessage);
        this.newMessage = '';
        console.log(this.messages);
    };
    HomePageComponent.prototype.isYou = function (email) {
        if (email == this.afService.email)
            return true;
        else
            return false;
    };
    HomePageComponent.prototype.isMe = function (email) {
        if (email == this.afService.email)
            return false;
        else
            return true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], HomePageComponent.prototype, "myScrollContainer", void 0);
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(709),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _b) || Object])
    ], HomePageComponent);
    return HomePageComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/home-page.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    LoginPageComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.afService.loginWithGoogle().then(function (data) {
            // Send them to the homepage if they are logged in
            console.log(data);
            //this.afService.addUserInfo();
            _this.router.navigate(['']);
        });
    };
    LoginPageComponent.prototype.loginWithEmail = function (event, email, password) {
        var _this = this;
        event.preventDefault();
        this.afService.loginWithEmail(email, password).then(function () {
            _this.router.navigate(['']);
        })
            .catch(function (error) {
            if (error) {
                _this.error = error;
                console.log(_this.error);
            }
        });
    };
    LoginPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(710),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoginPageComponent);
    return LoginPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/login-page.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grade; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Grade = (function () {
    function Grade() {
    }
    Grade = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], Grade);
    return Grade;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/grade.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Question = (function () {
    function Question(name, key, A, B, C, D) {
        this.name = name;
        this.key = key;
        this.A = A;
        this.B = B;
        this.C = C;
        this.D = D;
    }
    Question.prototype.setQuestion = function (name, key) {
        this.name = name;
        this.key = key;
    };
    Question = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [String, String, String, String, String, String])
    ], Question);
    return Question;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/question.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionManagementComponent = (function () {
    function QuestionManagementComponent(afService) {
        this.afService = afService;
        this.quizs = this.afService.quizs;
        this.mode = "listquiz";
        this.namequiz = "";
    }
    QuestionManagementComponent.prototype.ngOnInit = function () {
    };
    QuestionManagementComponent.prototype.listquestion = function () {
        this.questions = this.afService.getQuestion(this.namequiz);
        this.mode = "listquestion";
    };
    QuestionManagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-management',
            template: __webpack_require__(711),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], QuestionManagementComponent);
    return QuestionManagementComponent;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/question-management.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizManagementComponent = (function () {
    function QuizManagementComponent(afService) {
        this.afService = afService;
        this.quizs = this.afService.quizs;
    }
    QuizManagementComponent.prototype.ngOnInit = function () {
    };
    QuizManagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz-management',
            template: __webpack_require__(712),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], QuizManagementComponent);
    return QuizManagementComponent;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/quiz-management.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_time__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_question__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_grade__ = __webpack_require__(514);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizPageComponent = (function () {
    function QuizPageComponent(afService, timerService) {
        this.afService = afService;
        this.timerService = timerService;
        this.lambaithied = false;
        this.selectquiz = false;
        this.result = false;
        this.review = false;
        this.pager = {
            index: 0,
            size: 1,
            count: 1
        };
        this.questiones = [];
        this.grades = [];
        this.grade = new __WEBPACK_IMPORTED_MODULE_4__model_grade__["a" /* Grade */]();
        this.quizs = this.afService.quizs;
        this.namequiz = "";
        this.mode = 'listquiz';
    }
    QuizPageComponent.prototype.ngOnInit = function () {
    };
    QuizPageComponent.prototype.lambaithi = function () {
        var _this = this;
        this.mode = 'lambaithi';
        this.lambaithied = true;
        this.questions = this.afService.getQuestion(this.namequiz);
        this.questions.subscribe(function (list) {
            var i = 0;
            list.forEach(function (snapshot) {
                _this.questiones[i] = new __WEBPACK_IMPORTED_MODULE_3__model_question__["a" /* Question */](snapshot.name, snapshot.key, snapshot.A, snapshot.B, snapshot.C, snapshot.D);
                _this.questiones[i].isAnswer = false;
                _this.questiones[i].index = i;
                _this.questiones[i].isAnswered = "chưa trả lời";
                _this.questiones[i].userAnswer = "";
                console.log(_this.questiones[i].name + i);
                console.log(_this.questiones[i].D + "  " + i);
                i++;
            });
        });
        this.timerService.startTimer();
        console.log(this.lambaithied);
        this.pager.count = this.questiones.length;
        this.questiones.slice(this.pager.index, this.pager.index + this.pager.size);
        //console.log(this.quiz.time);
    };
    QuizPageComponent.prototype.chondethi = function () {
        var _this = this;
        this.dethi = this.afService.chondethi(this.namequiz);
        this.dethi.subscribe(function (list) {
            list.forEach(function (snapshot) {
                if (snapshot.name = _this.namequiz) {
                    //      this.quiz=new Quiz(snapshot);
                    //    console.log(this.quiz.time);
                    _this.timerService.initTimer((snapshot.time) * 60);
                }
            });
        });
        this.selectquiz = true;
        this.lambaithied = false;
        this.result = false;
        this.mode = 'quiz';
        //this.namequiz="";
        //  console.log(this.timerService.displayTime);
        // console.log(this.timedethi);
    };
    // onSelect(i: number, userAnswer: string){
    //     this.userAnswer[i]=userAnswer;
    //     console.log(this.userAnswer[i]+ "   " + i);
    // }
    QuizPageComponent.prototype.nopbai = function () {
        var _this = this;
        this.correctCount = 0;
        var i = 0;
        this.questiones.forEach(function (q) {
            if (q.userAnswer == q.key) {
                _this.correctCount++;
            }
            console.log(_this.questiones[i].isAnswer);
            i++;
        });
        console.log(this.correctCount);
        this.tinhdiem();
        this.mode = 'result';
        this.selectquiz = false;
        this.lambaithied = false;
        this.afService.sendGrade(this.grade.mark, this.grade.dethi);
    };
    QuizPageComponent.prototype.tinhdiem = function () {
        this.grade = new __WEBPACK_IMPORTED_MODULE_4__model_grade__["a" /* Grade */]();
        this.grade.mark = (this.correctCount / this.questiones.length) * 10;
        this.grade.dethi = this.namequiz;
        console.log(this.grade.mark);
    };
    QuizPageComponent.prototype.xemlai = function () {
        this.mode = 'review';
        this.lambaithied = false;
    };
    QuizPageComponent.prototype.goTo = function (index) {
        if (index >= 0 && index < this.pager.count) {
            this.pager.index = index;
            this.mode = 'lambaithi';
        }
    };
    QuizPageComponent.prototype.isCorrect = function (question) {
        var isCorrect;
        (question.userAnswer == question.key) ? isCorrect = 'Câu trả lời đúng' : isCorrect = 'Câu trả lời sai';
        (question.userAnswer == "") ? isCorrect = 'Bạn chưa trả lời' : '';
        return isCorrect;
    };
    QuizPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quiz-page',
            template: __webpack_require__(713),
            styles: [__webpack_require__(692)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_time__["a" /* Timer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__providers_time__["a" /* Timer */]) === 'function' && _b) || Object])
    ], QuizPageComponent);
    return QuizPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/quiz-page.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(150);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationPageComponent = (function () {
    function RegistrationPageComponent(afService, router) {
        this.afService = afService;
        this.router = router;
    }
    RegistrationPageComponent.prototype.register = function (event, name, email, password) {
        var _this = this;
        event.preventDefault();
        this.afService.registerUser(email, password).then(function (user) {
            //this.afService.saveUserInfoFromForm(user.uid, name, email)
            _this.afService.addUser(name, email).then(function () {
                _this.router.navigate(['']);
            })
                .catch(function (error) {
                _this.error = error;
            });
        })
            .catch(function (error) {
            _this.error = error;
            console.log(_this.error);
        });
    };
    RegistrationPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration-page',
            template: __webpack_require__(714),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegistrationPageComponent);
    return RegistrationPageComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/registration-page.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_af__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserManagementComponent = (function () {
    function UserManagementComponent(afService) {
        this.afService = afService;
        this.users = this.afService.users;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
    };
    UserManagementComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(715),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__providers_af__["a" /* AF */]) === 'function' && _a) || Object])
    ], UserManagementComponent);
    return UserManagementComponent;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/user-management.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/environment.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/polyfills.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathJaxDirective; });
// import {Directive, ElementRef, Input} from '@angular/core';
// @Directive({
//     selector: '[MathJax]'
// })
// export class MathJaxDirective {
//     @Input('MathJax') fractionString: string;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MathJaxDirective = (function () {
    function MathJaxDirective(element) {
        this.element = element;
        this.value = "";
    }
    MathJaxDirective.prototype.ngOnChanges = function () {
        this.element.nativeElement.innerHTML = this.value;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.element.nativeElement]);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("MathJax"), 
        __metadata('design:type', String)
    ], MathJaxDirective.prototype, "value", void 0);
    MathJaxDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[MathJax]' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], MathJaxDirective);
    return MathJaxDirective;
    var _a;
}());
//# sourceMappingURL=D:/Khóa luận/tracnghiem-duan/src/mathjax.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".border-left {\n  border-left: solid 1px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".form-control{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".filterable {\r\n    margin-top: 15px;\r\n}\r\n.filterable .panel-heading .pull-right {\r\n    margin-top: -20px;\r\n}\r\n.filterable .filters input[disabled] {\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: auto;\r\n    box-shadow: none;\r\n    padding: 0;\r\n    height: auto;\r\n}\r\n.filterable .filters input[disabled]::-webkit-input-placeholder {\r\n    color: #333;\r\n}\r\n.filterable .filters input[disabled]::-moz-placeholder {\r\n    color: #333;\r\n}\r\n.filterable .filters input[disabled]:-ms-input-placeholder {\r\n    color: #333;\r\n}\r\n.form-control{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "body\n{\n    padding-top: 20px;\n    background-color: #F7F7F7;\n}\n.post\n{\n    background-color: #FFF;\n    overflow: hidden;\n    box-shadow: 0 0 1px #CCC;\n}\n.post img\n{\n    filter: blur(2px);\n    -webkit-filter: blur(2px);\n    -moz-filter: blur(2px);\n    -o-filter: blur(2px);\n    -ms-filter: blur(2px);\n}\n.post .content\n{\n    padding: 15px;\n}\n.post .author\n{\n    font-size: 11px;\n    color: #737373;\n    padding: 25px 30px 20px;\n}\n.post .post-img-content\n{\n    height: 196px;\n    position: relative;\n}\n.post .post-img-content img\n{\n    position: absolute;\n}\n.post .post-title\n{\n    display: table-cell;\n    vertical-align: bottom;\n    z-index: 2;\n    position: relative;\n}\n.post .post-title b\n{\n    background-color: rgba(51, 51, 51, 0.58);\n    display: inline-block;\n    margin-bottom: 5px;\n    color: #FFF;\n    padding: 10px 15px;\n    margin-top: 5px;\n}\n\n\n\n\n/*.bs-example {\n  position: relative;\n  padding: 15px 15px 15px;\n  margin: 0 -15px 0px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  background-color: #E1E2E3;\n  box-shadow: inset 0 3px 6px rgba(0,0,0,.05);\n  height: 60vh;\n  overflow-y: scroll;\n}\n#messages {\n  background-color: #2d384a !important;\n}\n\n.author {\n  font-size: 12px;\n}\n.send-message {\n  color: #ffffff;\n  background-color: #4184f3;\n  text-decoration: none;\n  padding: 10px 20px 10px 20px;\n  display: inline-flex;\n  cursor: pointer;\n}\n\n.message-text {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  width: 100%;\n}\n\np {\n  font-size: 16px;\n}\n\n.bubble{\n  background-color: #F2F2F2;\n  border-radius: 5px;\n  box-shadow: 0 0 6px #B2B2B2;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  vertical-align: top;\n}\n\n.bubble::before {\n  background-color: #F2F2F2;\n  content: \"\\00a0\";\n  display: block;\n  height: 16px;\n  position: absolute;\n  top: 11px;\n  transform:             rotate( 29deg ) skew( -35deg );\n  -moz-transform:    rotate( 29deg ) skew( -35deg );\n  -ms-transform:     rotate( 29deg ) skew( -35deg );\n  -o-transform:      rotate( 29deg ) skew( -35deg );\n  -webkit-transform: rotate( 29deg ) skew( -35deg );\n  width:  20px;\n}\n\n.me {\n  display: inherit;\n  margin: 5px 45px 5px 20px;\n}\n\n.me::before {\n  box-shadow: -2px 2px 2px 0 rgba( 178, 178, 178, .4 );\n  left: -9px;\n}\n\n.you {\n  display: inherit;\n  margin: 5px 20px 5px 45px;\n}\n\n.you::before {\n  box-shadow: 2px -2px 2px 0 rgba( 178, 178, 178, .4 );\n  right: -9px;\n}\n\n.bs-example+.highlight, .bs-example+.zero-clipboard+.highlight {\n  margin: 0px -15px 15px;\n  border-width: 0 0 1px;\n  border-radius: 0;\n}\n.highlight {\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "/****** LOGIN MODAL ******/\n.loginmodal-container {\n  padding: 30px;\n  max-width: 350px;\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto;\n}\n\n.loginmodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n\n.loginmodal-submit {\n  /* border: 1px solid #3079ed; */\n  width: 100%;\n  border: 0px;\n  color: #fff;\n  text-shadow: 0 1px rgba(0,0,0,0.1);\n  background-color: #4d90fe;\n  padding: 11px 0px;\n  font-family: roboto;\n  font-size: 21px;\n   background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed));\n}\n\n.loginmodal-submit:hover {\n  /* border: 1px solid #2f5bb7; */\n  border: 0px;\n  text-shadow: 0 1px rgba(0,0,0,0.3);\n  background-color: #357ae8;\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\n}\n\n.loginmodal-container a {\n  text-decoration: none;\n  color: #2e6da4;\n  font-weight: 400;\n  text-align: center;\n  display: inline-block;\n  opacity: 0.6;\n  -webkit-transition: opacity ease 0.5s;\n  transition: opacity ease 0.5s;\n}\n#email {\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".form-control{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".answered {\r\n    background-color: paleturquoise;\r\n    width: 50px;\r\n    height: 20px;\r\n    margin: 10px;\r\n    display: inline;\r\n    padding-left: 10px;\r\n}\r\n.not-answered {\r\n    background-color: pink;\r\n    width: 50px;\r\n    height: 20px;\r\n    margin: 10px;\r\n    display: inline;\r\n    padding-left: 10px;\r\n}\r\n.table-answered {\r\n    display: inline;\r\n    \r\n    background-color: lightgrey;\r\n}\r\n.multiple_question {\r\n    padding-left: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, "/****** LOGIN MODAL ******/\n.registermodal-container {\n  padding: 30px;\n  max-width: 350px;\n  width: 100% !important;\n  background-color: #F7F7F7;\n  margin: 0 auto;\n  border-radius: 2px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  font-family: roboto;\n}\n\n.registermodal-container h1 {\n  text-align: center;\n  font-size: 1.8em;\n  font-family: roboto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(23)();
// imports


// module
exports.push([module.i, ".form-control{\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"col-md-4\">\n\n            \n            <form class=\"form-horizontal\"  id=\"myform\" (submit)=\"addquestion($event, dethi.value, name.value, A.value, B.value, C.value, D.value, key.value)\">\n\n                <div class=\"alert alert-success\" *ngIf=\"alert==true\">\n                <strong>Bạn đã thêm câu hỏi thành công!</strong>\n                </div>\n\n                    <div class=\"form-group\">\n                       <label for=\"course\">Câu hỏi thuộc đề thi:</label>\n                       <select #dethi type=\"text\" class=\"form-control\" id=\"course\" name=\"course\" placeholder=\"Course\">\n                           <option *ngFor=\"let quiz of quizs | async\" [ngValue]=\"quiz.name\" >{{quiz.name}}</option>\n                       </select>                      \n                    </div>\n                    \n                    <div class=\"form-group\">\n                         <label for=\"csetitle\">Nội dung câu hỏi</label>\n                         <textarea #name type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" placeholder=\"Điền nội dung câu hỏi tại đây\" cols=\"40\" rows=\"5\" style=\"resize:vertical;\" required></textarea>\n                    </div>\n                    \n                    <!--<textarea cols=\"10\" id=\"editor1\" name=\"editor1\" rows=\"10\" >&lt;p&gt;This is some &lt;strong&gt;sample text&lt;/strong&gt;. You are using &lt;a href=\"http://ckeditor.com/\"&gt;CKEditor&lt;/a&gt;.&lt;/p&gt;\n\t</textarea>\n                    <textarea\n                            #editorArea\n                            ngDefaultControl\n                            spellcheck=\"false\"\n                            class=\"editor\"\n                            \n                    ></textarea>\n\n                    <br/><br/>\n\n                    <div class=\"result\" #result>c {{ editorArea.value }}</div>\n                    -->\n                    <!--<h1 class=\"math-element\" id=\"equation\" [mathJax]=\"equationTexString\">\n</h1>-->\n\n                    <div class=\"form-group\">\n                       <label for=\"title\">Lựa chọn A:</label>\n                       <input #A type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" placeholder=\"\" cols=\"40\" rows=\"5\" style=\"resize:vertical;\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                       <label for=\"title\">Lựa chọn B:</label>\n                       <input #B type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" placeholder=\"\" cols=\"40\" rows=\"5\" style=\"resize:vertical;\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                       <label for=\"title\">Lựa chọn C:</label>\n                       <input #C type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" placeholder=\"\" cols=\"40\" rows=\"5\" style=\"resize:vertical;\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                       <label for=\"title\">Lựa chọn D:</label>\n                       <input #D type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" placeholder=\"\" cols=\"40\" rows=\"5\" style=\"resize:vertical;\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                       <label for=\"title\">Đáp án đúng:</label>\n                       <input #key type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" placeholder=\"\" cols=\"40\" rows=\"5\" style=\"resize:vertical;\" required>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <button id=\"add-more\" name=\"add-more\" class=\"btn btn-primary\" type=\"submit\">Thêm câu hỏi</button>\n                        <input class=\"btn btn-primary\" type=\"reset\" (click)=\"reset()\" value=\"Thiết lập lại\" />\n                    </div>\n                    \n            </form>\n        </div>\n    </div>"

/***/ }),

/***/ 706:
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n    <h3 style=\"padding-bottom: 20px; padding-left: 30px\" class=\"nav nav-pills\" *ngIf=\"!isLoggedIn\">Hệ thống thi trắc nghiệm THPT</h3>\n    <div *ngIf=\"isLoggedIn\">\n\n      <ul class=\"nav nav-pills navbar-right border-left\" style=\"padding-right: 10px\">\n        <li><a style=\"padding-left: 10px\">{{afService.displayName}}</a></li>\n      </ul>\n\n      <ul class=\"nav nav-pills navbar-right \" >\n        <li><a style=\"cursor: pointer;\" (click)=\"logout()\">Đăng xuất</a></li>\n      </ul>\n      \n    \n\n    <ul class=\"nav nav-pills\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Trang chủ</a>\n      </li>\n      <!--<li class=\"nav-item\">\n        <a class=\"nav-link active\" [routerLink]=\"['/quiz']\">Làm bài thi</a>\n      </li>-->\n      <li class=\"nav-item\" *ngIf=\"afService.role=='admin'\">\n        <a class=\"nav-link\" [routerLink]=\"['/usermanagement']\">Quản lý người dùng</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"afService.role=='admin'\">\n        <a class=\"nav-link\" [routerLink]=\"['/quizmanagement']\">Quản lý bài thi</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"afService.role=='teacher'\">\n        <a class=\"nav-link\" [routerLink]=\"['/questionmanagement']\">Quản lý câu hỏi</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"afService.role=='teacher'\">\n        <a class=\"nav-link\" [routerLink]=\"['/grademanagement']\">Quản lý điểm</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"afService.role=='student'\">\n        <a class=\"nav-link\" [routerLink]=\"['/grade']\">Xem điểm</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"afService.role=='student'\">\n        <a class=\"nav-link\" [routerLink]=\"['/addquestion']\">Thêm câu hỏi</a>\n      </li>\n    </ul>\n    </div>\n      \n</nav>\n    \n  \n\n<div class=\"app-content\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Bảng kết quả thi của thí sinh</h3>\n    <hr>\n    <!--<p>Inspired by this <a href=\"http://bootsnipp.com/snippets/featured/panel-tables-with-filter\">snippet</a></p>-->\n    <div class=\"row\">\n        <div class=\"panel panel-primary filterable\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{afService.displayName}}</h3>\n                <div class=\"pull-right\">\n                    <button class=\"btn btn-default btn-xs btn-filter\"><span class=\"glyphicon glyphicon-filter\"></span> Lọc</button>\n                </div>\n            </div>\n            <table class=\"table\">\n                <thead>\n                    <tr class=\"filters\">\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Số thứ tự\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Tên thí sinh\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Môn thi\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Điểm thi\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Thời gian\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Hành động\" ></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let grade of grades | async | paginate: {itemsPerPage: 10, currentPage:page}; let index = index\">\n                        <td style=\"text-align: center\">{{index+1}}</td>\n                        <td style=\"padding-left: 20px\">{{grade.displayName}}</td>\n                        <td style=\"padding-left: 50px\">{{grade.dethi}}</td>\n                        <td style=\"text-align: center\">{{grade.mark | number : '1.2-2'}}</td>\n                        <td style=\"padding-left: 20px\">{{grade.timestamp | date:\"MM/dd/yy hh:mm a\"}}</td>\n                        <td style=\"text-align: center\"><a>Xóa</a> <a>Sửa</a></td>\n                    </tr>\n                    \n                </tbody>\n                \n            </table>\n            <pagination-controls (pageChange)=\"page = $event\"\n                                        style=\"text-align: center\"\n                                        directionLinks=\"true\"\n                                        autoHide=\"true\"\n                                        previousLabel=\"Trang trước\"\n                                        nextLabel=\"Trang tiếp\"\n                                        screenReaderPaginationLabel=\"Pagination\"\n                                        screenReaderPageLabel=\"page\"\n                                        screenReaderCurrentLabel=\"You're on page\">\n                                </pagination-controls> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 708:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Bảng kết quả thi của thí sinh</h3>\n    <hr>\n    <!--<p>Inspired by this <a href=\"http://bootsnipp.com/snippets/featured/panel-tables-with-filter\">snippet</a></p>-->\n    <div class=\"row\">\n        <div class=\"panel panel-primary filterable\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{afService.displayName}}</h3>\n                <div class=\"pull-right\">\n                    <button class=\"btn btn-default btn-xs btn-filter\"><span class=\"glyphicon glyphicon-filter\"></span> Lọc</button>\n                </div>\n            </div>\n            <table class=\"table\">\n                <thead>\n                    <tr class=\"filters\">\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Lần thi\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Môn thi\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Điểm thi\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Thời gian\" ></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let grade of grades | async | paginate: {itemsPerPage: 10, currentPage:page}; let index = index\">\n                        <td style=\"text-align: center\">{{index+1}}</td>\n                        <td style=\"padding-left: 100px\">{{grade.dethi}}</td>\n                        <td style=\"text-align: center\">{{grade.mark | number : '1.2-2'}}</td>\n                        <td style=\"padding-left: 80px\">{{grade.timestamp | date:\"MM/dd/yy hh:mm a\"}}</td>\n                    </tr>\n                    \n                </tbody>\n                \n            </table>\n            <pagination-controls (pageChange)=\"page = $event\"\n                                        style=\"text-align: center\"\n                                        directionLinks=\"true\"\n                                        autoHide=\"true\"\n                                        previousLabel=\"Trang trước\"\n                                        nextLabel=\"Trang tiếp\"\n                                        screenReaderPaginationLabel=\"Pagination\"\n                                        screenReaderPageLabel=\"page\"\n                                        screenReaderCurrentLabel=\"You're on page\">\n                                </pagination-controls> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 col-md-4\">\n            <div class=\"post\">\n                <div class=\"post-img-content\">\n                    <img src=\"http://placehold.it/460x250/e67e22/ffffff&text=HTML5\" class=\"img-responsive\" />\n                    <span class=\"post-title\"><b>Quy trình thi THPT quốc gia và xét ĐH 2017</b><br />\n                        <b></b></span>\n                </div>\n                <div class=\"content\">\n                    <div class=\"author\">\n                        By <b>Bhaumik</b> |\n                        <time datetime=\"2014-01-20\">January 20th, 2014</time>\n                    </div>\n                    <div>\n                       Năm 2017 Bộ giáo dục có điều chỉnh mới cho thi thpt quốc gia và xét Đại học cao đẳng năm 2017 như khi làm hồ sơ thi THPT quốc gia phải chọn luôn nguyện vọng, thay đổi hình thức thi cũng như xét tuyển các nguyên vọng. 6 Bước đơn giản là hiểu toàn bộ quy trình:\n                    </div>\n                    <div>\n                        <a href=\"http://www.jquery2dotnet.com/2014/01/jquery-highlight-table-row-and-column.html\" class=\"btn btn-warning btn-sm\">Read more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4 col-md-4\">\n            <div class=\"post\">\n                <div class=\"post-img-content\">\n                    <img src=\"http://placehold.it/460x250/2980b9/ffffff&text=CSS3\" class=\"img-responsive\" />\n                    <span class=\"post-title\"><b>Danh sách các trường Đại học công bố phương án tuyển sinh 2017</b><br />\n                        <b></b></span>\n                </div>\n                <div class=\"content\">\n                    <div class=\"author\">\n                        By <b>Bhaumik</b> |\n                        <time datetime=\"2014-01-20\">January 20th, 2014</time>\n                    </div>\n                    <div>\n                        Tổng hợp danh sách các trường Đại học, Học viện, Cao đẳng trên cả nước công bố phương án tuyển sinh năm 2017 cập nhật nhanh nhất, mới nhất.\n                    </div>\n                    <div>\n                        <a href=\"http://www.jquery2dotnet.com/2013/11/share-social-media-round-buttons.html\" class=\"btn btn-primary btn-sm\">Read more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4 col-md-4\">\n            <div class=\"post\">\n                <div class=\"post-img-content\">\n                    <img src=\"http://placehold.it/460x250/47A447/ffffff&text=jQuery\" class=\"img-responsive\" />\n                    <span class=\"post-title\"><b>Danh sách cụm thi và mã cụm thi THPT QG 2017 - Chính thức</b><br />\n                        <b></b></span>\n                </div>\n                <div class=\"content\">\n                    <div class=\"author\">\n                        By <b>Bhaumik</b> |\n                        <time datetime=\"2014-01-20\">January 20th, 2014</time>\n                    </div>\n                    <div>\n                        Bộ GD vừa công bố danh sách các cụm thi, theo đó mỗi cụm thi được quy định 1 hội đồng thi (mã cụm thi) riêng. Mã cụm thi học sinh cần lưu lại để khi làm hồ sơ.\n                    </div>\n                    <div>\n                        <a href=\"http://www.jquery2dotnet.com/2013/07/cool-social-sharing-button-using-css3.html\" class=\"btn btn-success btn-sm\">Read more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n<!--<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 col-md-offset-2\">\n      <div #scrollMe class=\"bs-example\" id=\"messages\">\n        <div *ngFor=\"let message of messages | async\">\n          <div class=\"bubble\" [class.you]=\"isYou(message.email)\" [class.me]=\"isMe(message.email)\">\n            <p>{{ message.message }}</p>\n            <div class=\"author\">\n              {{ message.displayName }} | {{ message.timestamp | date:\"MM/dd/yy hh:mm a\" }}\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n      <figure class=\"highlight\">\n        <input type=\"textarea\" class=\"message-text\" [(ngModel)]=\"newMessage\" (keyup.enter)=\"sendMessage()\">\n        <a  class=\"send-message\">SEND</a>\n      </figure>\n    </div>\n  </div>\n</div>-->\n"

/***/ }),

/***/ 710:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  {{error}}\n</div>\n\n<div class=\"modal-dialog\">\n  <div class=\"loginmodal-container\">\n    <h1 class=\"text-primary\">ĐĂNG NHẬP</h1><br>\n\n    <form class=\"form-signin\" (submit)=\"loginWithEmail($event, email.value, password.value)\">\n      <label for=\"email\" class=\"sr-only\">Địa chỉ email</label>\n      <input #email type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Địa chỉ email\">\n      <label for=\"password\" class=\"sr-only\">Mật khẩu</label>\n      <input #password type=\"password\" id=\"password\" class=\"form-control\" placeholder=\"Mật khẩu\" required=\"\">\n      <br>\n      <!--<div style=\"margin-top:10px; margin-left:85px\" >\n                                    \n\n                                    \n                                      <button id=\"btn-login\" style=\"color: white; align: center\" class=\"btn btn-success\" type=\"submit\">Đăng nhập</button>\n                                      \n\n                                   \n                                </div>-->\n      <button style=\"margin-top:10px; margin-left:100px\"  class=\"btn btn-primary\" type=\"submit\">Đăng nhập</button>\n    </form>\n    <button id=\"btn-glogin\" style=\"color: white; margin-top:10px; margin-left:67px\"  class=\"btn btn-success\" (click)=\"loginWithGoogle()\">Đăng nhập bằng Google</button>\n    <hr>\n\n    <!--<button class=\"login loginmodal-submit\" (click)=\"loginWithGoogle()\">Đăng nhập với Google</button>-->\n    \n    <div class=\"form-group\">\n                                    <div class=\"col-md-12 control\">\n                                        <div style=\"border-top: 1px solid#888; padding-top:15px; font-size:120%\" >\n                                            Chưa có tài khoản!\n                                        <a [routerLink]=\"['/register']\" >\n                                            Đăng ký tại đây\n                                        </a>\n                                        </div>\n                                    </div>\n                                </div>    \n    <!--<a [routerLink]=\"['/register']\" style=\"cursor: pointer;\">Đăng ký ngay</a>-->\n  </div>\n</div>\n"

/***/ }),

/***/ 711:
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">  \n      <div class=\"row\" >\n          <div class=\"list-group\" *ngIf=\"mode=='listquiz'\" >\n                <a class=\"list-group-item active\">\n                  Quản lý các đề thi THPT Quốc gia  \n                </a>\n                <a style=\"cursor: pointer\" class=\"list-group-item\" *ngFor=\"let quiz of quizs | async\" (click)=\"namequiz=quiz.name\" (click)=\"listquestion()\" >{{quiz.name}}</a>              \n          </div>\n\n          <div class=\"container\" *ngIf=\"mode=='listquestion'\">\n              <h3>Bảng quản lý các câu hỏi trong đề thi</h3>\n              <hr>\n              <!--<p>Inspired by this <a href=\"http://bootsnipp.com/snippets/featured/panel-tables-with-filter\">snippet</a></p>-->\n              <div class=\"row\">\n                  <div class=\"panel panel-primary filterable\">\n                      <div class=\"panel-heading\">\n                          <h3 class=\"panel-title\">Đề thi {{namequiz}}</h3>\n                          <div class=\"pull-right\">\n                              <button class=\"btn btn-default btn-xs btn-filter\"><span class=\"glyphicon glyphicon-filter\"></span> Lọc</button>\n                          </div>\n                      </div>\n                      <button style=\"margin-left: 20px; margin-top: 10px\" class=\"btn btn-primary\" [routerLink]=\"['/addquestion']\" ><strong>+ Thêm câu hỏi</strong></button>\n                      <table class=\"table\">\n                          <thead>\n                              <tr class=\"filters\">\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Số thứ tự\" ></th>\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Tên câu hỏi\" ></th>\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Đáp án A\" ></th>\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Đáp án B\" ></th>\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Đáp án C\" ></th>\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Đáp án D\" ></th>\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Đáp án đúng\" ></th>\n                                  <th><input type=\"text\" class=\"form-control\" placeholder=\"Hành động\" ></th>\n                                  \n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr *ngFor=\"let question of questions | async | paginate: {itemsPerPage: 10, currentPage:page}; let index = index\">\n                                  <td style=\"text-align: center\">{{index+1}}</td>\n                                  <td style=\"padding-left: 1px\">{{question.name}}</td>\n                                  <td style=\"padding-left: 1px\">{{question.A}}</td>\n                                  <td style=\"padding-left: 1px\">{{question.B}}</td>\n                                  <td style=\"padding-left: 1px\">{{question.C}}</td>\n                                  <td style=\"padding-left: 1px\">{{question.D}}</td>\n                                  <td style=\"padding-left: 1px\">{{question.key}}</td>\n                                  <td style=\"text-align: center\"><a>Xóa</a> <a>Sửa</a></td>\n                                  \n                                  \n                              </tr>\n                              \n                          </tbody>\n                          \n                      </table>\n                      <pagination-controls (pageChange)=\"page = $event\"\n                                                  style=\"text-align: center\"\n                                                  directionLinks=\"true\"\n                                                  autoHide=\"true\"\n                                                  previousLabel=\"Trang trước\"\n                                                  nextLabel=\"Trang tiếp\"\n                                                  screenReaderPaginationLabel=\"Pagination\"\n                                                  screenReaderPageLabel=\"page\"\n                                                  screenReaderCurrentLabel=\"You're on page\">\n                                          </pagination-controls> \n                  </div>\n              </div>\n          </div>\n\n\n      </div>\n    </div>\n"

/***/ }),

/***/ 712:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Bảng quản lý danh sách môn thi</h3>\n    <hr>\n    <!--<p>Inspired by this <a href=\"http://bootsnipp.com/snippets/featured/panel-tables-with-filter\">snippet</a></p>-->\n    <div class=\"row\">\n        <div class=\"panel panel-primary filterable\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{afService.displayName}}</h3>\n                <div class=\"pull-right\">\n                    <button class=\"btn btn-default btn-xs btn-filter\"><span class=\"glyphicon glyphicon-filter\"></span> Lọc</button>\n                </div>\n            </div>\n            <button style=\"margin-left: 20px; margin-top: 10px\" class=\"btn btn-primary\" ><strong>+ Thêm môn thi</strong></button>\n            <table class=\"table\">\n                <thead>\n                    <tr class=\"filters\">\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Số thứ tự\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Tên môn thi\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Thời gian\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Tổng số câu hỏi\" ></th>              \n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Hành động\" ></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let quiz of quizs | async | paginate: {itemsPerPage: 10, currentPage:page}; let i=index; let index = index\">\n                        <td style=\"text-align: center\">{{index+1}}</td>\n                        <td style=\"padding-left: 100px\">{{quiz.name}}</td>\n                        <td style=\"text-align: center\">{{quiz.time}}</td>\n                        <td style=\"text-align: center\">{{quiz.totalquestion}}</td>              \n                        <td style=\"text-align: center\"><a>Xóa</a> <a>Sửa</a></td>\n                    </tr>\n                    \n                </tbody>\n                 \n            </table>\n            <pagination-controls (pageChange)=\"page = $event\"\n                                        style=\"text-align: center\"\n                                        directionLinks=\"true\"\n                                        autoHide=\"true\"\n                                        previousLabel=\"Trang trước\"\n                                        nextLabel=\"Trang tiếp\"\n                                        screenReaderPaginationLabel=\"Pagination\"\n                                        screenReaderPageLabel=\"page\"\n                                        screenReaderCurrentLabel=\"You're on page\">\n                                </pagination-controls>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n      <div class=\"container\">\n        <div class=\"row\" >\n            <!--<h4 class=\"text-primary\">Chọn đề thi:</h4>\n            <select name=\"dethi\" [(ngModel)]=\"namequiz\" (ngModelChange)=\"chondethi()\"  cols=\"30\" rows=\"5\">\n                <option class=\"chondethi\" value=\"\">Chọn đề thi</option>\n                <option class=\"chondethi\" *ngFor=\"let quiz of quizs | async\" [ngValue]=\"quiz.name\" >{{quiz.name}}</option>             \n            </select>-->\n\n            <div class=\"list-group\" *ngIf=\"mode=='listquiz'\">\n                <a class=\"list-group-item active\">\n                  Đề thi THPT Quốc gia  \n                </a>\n                <a style=\"cursor: pointer\" class=\"list-group-item\" *ngFor=\"let quiz of quizs | async\" (click)=\"namequiz=quiz.name\" (click)=\"chondethi()\" >{{quiz.name}}</a>\n                \n            </div>\n            \n        </div>\n    \n        <div class=\"row\" *ngIf=\"mode=='quiz'|| mode=='review'|| mode=='lambaithi'\">\n          <div class=\"col-md-4\" *ngFor=\"let dethi of dethi | async\">\n            <h3 class=\"text-primary\">Đề thi {{dethi.name}}</h3>\n            <h4>Tổng số câu hỏi: {{dethi.totalquestion}}</h4>\n            <h4>Thời gian:  <button >  {{timerService.displayTime}}</button> </h4>         \n            <div *ngIf=\"mode=='quiz'\"><a  class=\"btn btn-primary\" (click)='lambaithi()'>Làm bài thi</a></div>\n          </div>\n        </div>\n        <div *ngIf=\"mode=='lambaithi'\" class=\"row\">\n                    <!--<form class=\"form-quiz\" (submit)=\"nopbai()\">-->\n                        <div class=\"panel panel-primary\" *ngFor=\"let question of questiones | paginate: {itemsPerPage: 1, currentPage:page}; let i=index \">\n                                <div class=\"panel-heading\">\n                                    <h4> Câu hỏi {{question.index + 1}}:  {{question.name}}</h4>\n                                </div>\n                                <div class=\"multiple_question\">\n                                    <label class=\"\" >\n                                        <input type=\"radio\" name=\"question.name\" value=\"question.A\"  (click)=\"question.userAnswer=question.A\" (click)=\"question.isAnswer=true\" (click)=\"question.isAnswered='A'\"/> A. {{question.A}}\n                                    </label><br>\n                                    <label class=\"\" >\n                                        <input type=\"radio\" name=\"question.name\" value=\"question.B\"  (click)=\"question.userAnswer=question.B\" (click)=\"question.isAnswer=true\" (click)=\"question.isAnswered='B'\"/> B. {{question.B}}\n                                    </label><br>\n                                    <label class=\"\" >\n                                        <input type=\"radio\" name=\"question.name\" value=\"question.C\"  (click)=\"question.userAnswer=question.C\" (click)=\"question.isAnswer=true\" (click)=\"question.isAnswered='C'\"/> C. {{question.C}}\n                                    </label><br>\n                                    <label class=\"\" >\n                                        <input type=\"radio\" name=\"question.name\" value=\"question.D\"  (click)=\"question.userAnswer=question.D\" (click)=\"question.isAnswer=true\" (click)=\"question.isAnswered='D'\"/> D. {{question.D}}\n                                    </label><br>\n                                </div>\n  \n                                <pagination-controls (pageChange)=\"page = $event\"\n                                        directionLinks=\"true\"\n                                        autoHide=\"true\"\n                                        previousLabel=\"Câu trước\"\n                                        nextLabel=\"Câu tiếp\"\n                                        screenReaderPaginationLabel=\"Pagination\"\n                                        screenReaderPageLabel=\"page\"\n                                        screenReaderCurrentLabel=\"You're on page\">\n                                </pagination-controls> \n                                <!--<div  class=\"{{ question.isAnswer == true ? 'answered': 'not-answered' }}\">{{i}}. {{question.option}}</div>-->\n                                                               \n                        </div>\n                        <!--<div class=\"text-sm-center\">\n                                    <button class=\"btn btn-default\"  (click)=\"goTo(0);\">First</button>\n                                    <button class=\"btn btn-default\"  (click)=\"goTo(pager.index - 1);\">Prev</button>\n                                    <button class=\"btn btn-default\" (click)=\"goTo(pager.index + 1);\">Next</button>\n                                    <button class=\"btn btn-default\"  (click)=\"goTo(pager.count - 1);\">Last</button>\n                        </div>  -->\n                        <!--<p>\n                            <!--<input class=\"btn btn-primary\" type=\"submit\" value= \"Nộp bài\">-->\n                            \n                            <!--<button class=\"btn btn-primary\" (click)=\"xemlai()\">Xem lại</button>-->\n                        <!--</p>-->\n                   <!--</form>-->\n                   <button class=\"btn btn-primary\" (click)=\"nopbai()\">Nộp bài</button>\n                   <button class=\"btn btn-primary\" (click)=\"xemlai()\">Xem lại</button>\n               \n      </div>\n      <div *ngIf=\"mode=='review'\">\n        <div class=\"panel panel-primary\" >\n                 <div class=\"panel-heading\">\n                    <h4> Bảng trả lời </h4>\n                </div>\n                <div class=\"table-answered\" *ngFor=\"let question of questiones; let index = index;\">\n                    <div class=\"{{ question.isAnswer == true ? 'answered': 'not-answered' }}\"><span>{{index + 1}}. {{question.isAnswered}}</span>\n                    </div>\n                </div>                   \n            </div>\n            <button class=\"btn btn-primary\" (click)=\"mode='lambaithi'\">Quay lại</button>\n      </div>    \n      <!--<div class=\"row\" *ngIf=\"review\">\n            <div class=\"col-sm-4\" *ngFor=\"let question of questions; let index = index;\">\n            <div (click)=\"goTo(index)\" class=\"{{ question.isAnswer == true ? 'answered': 'not-answered' }}\">{{index + 1}}. {{question.isAnswer}}</div>\n            </div>\n      </div>-->\n\n      <div *ngIf=\"mode=='result'\" class=\"row\">\n          <h3 class=\"text-primary\" *ngFor=\"let dethi of dethi | async\">Kết quả đề thi {{dethi.name}}</h3>\n          <h4>Tổng số câu hỏi: {{questiones.length}}</h4>\n          <h4>Số câu trả lời đúng: {{correctCount}}</h4>\n          <h4>Bạn nhận được số điểm là: {{grade.mark}}</h4>\n\n            <div class=\"panel panel-primary\" *ngFor=\"let question of questiones | paginate: {itemsPerPage: 1, currentPage:page}; let i=index \">\n                                <div class=\"panel-heading\">\n                                    <h4> Câu hỏi {{question.index + 1}}:  {{question.name}}</h4>\n                                </div>\n                                <div class=\"multiple_question\">\n                                    <label class=\"\" >\n                                        <input type=\"radio\" disabled=\"disabled\" /> A. {{question.A}}\n                                    </label><br>\n                                    <label class=\"\" >\n                                        <input type=\"radio\" disabled=\"disabled\"/> B. {{question.B}}\n                                    </label><br>\n                                    <label class=\"\" >\n                                        <input type=\"radio\" disabled=\"disabled\"/> C. {{question.C}}\n                                    </label><br>\n                                    <label class=\"\" >\n                                        <input type=\"radio\" disabled=\"disabled\"/> D. {{question.D}}\n                                    </label><br>\n                                </div>\n\n                                <div class=\"alert {{ isCorrect(question) == 'Câu trả lời đúng'? 'alert-success': 'alert-danger'}}\">{{isCorrect(question)}}.</div>\n  \n                                <pagination-controls (pageChange)=\"page = $event\"\n                                        directionLinks=\"true\"\n                                        autoHide=\"true\"\n                                        previousLabel=\"Câu trước\"\n                                        nextLabel=\"Câu tiếp\"\n                                        screenReaderPaginationLabel=\"Pagination\"\n                                        screenReaderPageLabel=\"page\"\n                                        screenReaderCurrentLabel=\"You're on page\">\n                                </pagination-controls> \n                                <!--<div  class=\"{{ question.isAnswer == true ? 'answered': 'not-answered' }}\">{{i}}. {{question.option}}</div>-->\n                                                               \n                        </div>\n\n          <button class=\"btn btn-primary\" (click)=\"mode='listquiz'\">Thi tiếp</button>\n      </div>\n\n      \n</div>\n"

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\n  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n  <span class=\"sr-only\">Error:</span>\n  {{error}}\n</div>\n\n<div class=\"modal-dialog\">\n  <div class=\"registermodal-container\">\n    <h1 class=\"text-primary\">ĐĂNG KÝ</h1><br>\n\n    <form class=\"form-signin\" style=\"margin-bottom: 20px \" (submit)=\"register($event, name.value, email.value, password.value)\">\n      <label for=\"name\" class=\"sr-only\">Name</label>\n      <input #name type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Tên\" required=\"\">\n      <label style=\"margin-top:10px;\" for=\"email\" class=\"sr-only\">Email address</label>\n      <input #email style=\"margin-top:10px;\" type=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Địa chỉ email\" required=\"\" autofocus=\"\">\n      <label style=\"margin-top:10px;\" for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input #password  style=\"margin-top:10px;\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Mật khẩu\" required=\"\">\n      <br>\n      <button class=\"btn btn-md btn-primary btn-block\" type=\"submit\">Đăng ký</button>\n    </form>\n    <a style=\"margin-left:125px\" [routerLink]=\"['/login']\">Đăng nhập</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h3>Bảng quản lý danh sách người dùng</h3>\n    <hr>\n    <!--<p>Inspired by this <a href=\"http://bootsnipp.com/snippets/featured/panel-tables-with-filter\">snippet</a></p>-->\n    <div class=\"row\">\n        <div class=\"panel panel-primary filterable\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">{{afService.displayName}}</h3>\n                <div class=\"pull-right\">\n                    <button class=\"btn btn-default btn-xs btn-filter\"><span class=\"glyphicon glyphicon-filter\"></span> Lọc</button>\n                </div>\n            </div>\n            <button style=\"margin-left: 20px; margin-top: 10px\" class=\"btn btn-primary\" ><strong>+ Thêm người dùng</strong></button>\n            <table class=\"table\">\n                <thead>\n                    <tr class=\"filters\">\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Số thứ tự\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Tên người dùng\" ></th>\n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Địa chỉ email\" ></th> \n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Vai trò người dùng\" ></th>             \n                        <th><input type=\"text\" class=\"form-control\" placeholder=\"Hành động\" ></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users | async | paginate: {itemsPerPage: 10, currentPage:page}; let i=index; let index = index\">\n                        <td style=\"text-align: center\">{{index+1}}</td>\n                        <td style=\"padding-left: 70px\">{{user.displayName}}</td>\n                        <td style=\"padding-left: 50px\">{{user.email}}</td>\n                        <td style=\"text-align: center\">{{user.role}}</td>\n                        <td style=\"text-align: center\"><a>Xóa</a> <a>Sửa</a></td>\n                    </tr>\n                    \n                </tbody>\n                 \n            </table>\n            <pagination-controls (pageChange)=\"page = $event\"\n                                        style=\"text-align: center\"\n                                        directionLinks=\"true\"\n                                        autoHide=\"true\"\n                                        previousLabel=\"Trang trước\"\n                                        nextLabel=\"Trang tiếp\"\n                                        screenReaderPaginationLabel=\"Pagination\"\n                                        screenReaderPageLabel=\"page\"\n                                        screenReaderCurrentLabel=\"You're on page\">\n                                </pagination-controls>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ })

},[739]);
//# sourceMappingURL=main.bundle.js.map