(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{236:function(t,e,o){"use strict";o.r(e);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=o(6),r=Object(s.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[o("h1",{attrs:{id:"sso"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sso","aria-hidden":"true"}},[t._v("#")]),t._v(" SSO")]),t._v(" "),o("blockquote",[o("p",[t._v("For Single Sign-On (SSO) to function properly, a user with a matching email address must already exist within "),o("code",[t._v("directus_users")]),t._v(". If you would like to manage users "),o("em",[t._v("externally")]),t._v(" then you would use our "),o("router-link",{attrs:{to:"./../api/reference.html#scim"}},[t._v("SCIM endpoints")]),t._v(".")],1)]),t._v(" "),o("h3",{attrs:{id:"table-of-contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#google"}},[t._v("Google")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#twitter"}},[t._v("Twitter")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#facebook"}},[t._v("Facebook")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#github"}},[t._v("GitHub")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#okta"}},[t._v("Okta")])]),t._v(" "),o("li",[o("a",{attrs:{href:"#sso-flow"}},[t._v("SSO Flow")])])]),t._v(" "),o("h2",{attrs:{id:"google-sso"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#google-sso","aria-hidden":"true"}},[t._v("#")]),t._v(" Google SSO")]),t._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),o("p",[t._v("We support google SSO with both Google+ (soon to be discontinued) and OpenID Connect.")])]),t._v(" "),o("p",[t._v("Follow "),o("a",{attrs:{href:"https://developers.google.com/identity/protocols/OpenIDConnect#registeringyourapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google instructions"),o("OutboundLink")],1),t._v(" on how to register an app and get the "),o("code",[t._v("client_id")]),t._v(" and "),o("code",[t._v("client_secret")]),t._v(" tokens.")]),t._v(" "),o("p",[t._v("If you want to use Google+ API, Read these steps on "),o("a",{attrs:{href:"https://support.google.com/a/answer/3187191",target:"_blank",rel:"noopener noreferrer"}},[t._v("how to enable/disable Google+ APIs"),o("OutboundLink")],1)]),t._v(" "),o("h2",{attrs:{id:"twitter-sso"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#twitter-sso","aria-hidden":"true"}},[t._v("#")]),t._v(" Twitter SSO")]),t._v(" "),o("h2",{attrs:{id:"facebook-sso"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#facebook-sso","aria-hidden":"true"}},[t._v("#")]),t._v(" Facebook SSO")]),t._v(" "),o("h2",{attrs:{id:"github-sso"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#github-sso","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub SSO")]),t._v(" "),o("h2",{attrs:{id:"okta-sso"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#okta-sso","aria-hidden":"true"}},[t._v("#")]),t._v(" Okta SSO")]),t._v(" "),o("h3",{attrs:{id:"setup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),o("ol",[o("li",[o("strong",[t._v("Sign Up")]),t._v(": First create a Developer Okta account at https://developer.okta.com/signup/")]),t._v(" "),o("li",[o("strong",[t._v("Get Email")]),t._v(": Once you've created an account, a temporary password will be emailed to you.")]),t._v(" "),o("li",[o("strong",[t._v("Log In")]),t._v(": Activate your account by logging in with this temporary password and setting a new password.")]),t._v(" "),o("li",[o("strong",[t._v("Create App")]),t._v(": Create a new Okta web application by choosing "),o("em",[t._v("Applications")]),t._v(' in the main menu and then clicking on "Add Application". '),o("code",[t._v("https://<your-okta-id>-admin.oktapreview.com/admin/apps/active")])]),t._v(" "),o("li",[o("strong",[t._v("Choose Web")]),t._v(": Pick "),o("em",[t._v("Web")]),t._v(", click Next.")]),t._v(" "),o("li",[o("strong",[t._v("Login Redirect")]),t._v(": Make sure that "),o("em",[t._v("Login Redirect URIs")]),t._v(" is set to "),o("code",[t._v("[your-directus-host]/[project-name]/auth/sso/okta/callback")]),t._v(". For example "),o("code",[t._v("http://localhost/_/auth/sso/okta/callback")]),t._v(".")]),t._v(" "),o("li",[o("strong",[t._v("Get Keys")]),t._v(": Click on the newly created application and go to "),o("em",[t._v("General > Client Credentials")]),t._v(" and you will see the "),o("code",[t._v("Client ID")]),t._v(" and the "),o("code",[t._v("Client Secret")]),t._v(". Use these values for the Okta "),o("code",[t._v("client_id")]),t._v(" and "),o("code",[t._v("client_secret")]),t._v(" in your API project configuration, eg: "),o("code",[t._v("config/api.php")]),t._v(" (default) or "),o("code",[t._v("config/api.<project-name>.php")]),t._v(".")]),t._v(" "),o("li",[o("strong",[t._v("Base URL")]),t._v(": The "),o("code",[t._v("base_url")]),t._v(" can be found under "),o("em",[t._v("API")]),t._v(" in the main menu. You will see a list of Authorization Servers to pick from. The URL is under the column labeled "),o("code",[t._v("Issuer URI")]),t._v(".")])]),t._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("SCIM")]),t._v(" "),o("p",[t._v("Okta is also capable of externally managing your Directus users, allowing for more unified user provisioning within your organization. This is accomplished by using our "),o("router-link",{attrs:{to:"./../api/reference.html#scim"}},[t._v("API's dedicated SCIM endpoints")]),t._v(".")],1)])])},[],!1,null,null,null);r.options.__file="sso.md";e.default=r.exports}}]);