/* global $, document */
"use strict";
var member_validator;

var initValidator = function () {

    // DO NOT FORGET TO KEEP THIS FILE IN SYNC WITH /lib/commons/validation.js

    member_validator = $("#memberform").validate({
        rules: {
          nickname: {
            required: true,
            minlength: 2,
            remote: {
              url: "/members/checknickname",
              data: {
                previousNickname: function () {
                  return $("#previousNickname").val();
                }
              }
            }
          },
          firstname: "required",
          lastname: "required",
          email: {
            required: true,
            email: true
          },
          location: "required",
          reference: "required",
          profession: "required"
        },
        messages: {
          nickname: {
            remote: strings.members.validation.nickname.unavailable,
            alphanumeric: strings.members.validation.nickname.must_be_alphanumeric
          }
        },
        errorElement: "span",
        errorClass: "help-inline error",
        highlight: function (element, errorClass) {
          $(element).parent().addClass("error");
        },
        unhighlight: function (element, errorClass) {
          $(element).parent().removeClass("error");
        }
      }
    )
    ;

    member_validator.form();

    ['#nickname', '#lastname', '#firstname', "#email", "#profession", "#location", "#reference"].forEach(function (each) {
      $(each).on("change", function () {
        member_validator.element(each);
      });
      $(each).keyup(function () {
        member_validator.element(each);
      });

    });

  }
  ;
$(document).ready(initValidator);
