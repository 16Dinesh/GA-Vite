import { combineSlices } from "@reduxjs/toolkit";

export const AdminregisterFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "Key",
    label: "GA-Key",
    placeholder: "Enter your Key",
    componentType: "input",
    type: "password",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Service Name",
    name: "serviceName",
    componentType: "input",
    type: "text",
    placeholder: "Enter service name",
  },
  {
    label: "Service Description",
    name: "serviceDescription",
    componentType: "textarea",
    placeholder: "Enter service description",
  },
  // {
  //   label: "Category",
  //   name: "category",
  //   componentType: "select",
  //   options: [
  //     // can select from the add products form the addServers form
  //   ],
  // },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter service price",
  },
  {
    label: "Discount Price",
    name: "discountPrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter discount price (optional)",
  },
  // {
  //   //no.of Booking Slot per Day
  // },
  // {
  // Location Drop Down or Add the Location
  // }
];

export const addServiceFormElements = [
  {
    label: "Service Item",
    name: "serviceItem",
    componentType: "input",
    type: "text",
    placeholder: "Enter service Item",
  },
  // {
  //   label: "Available",
  //   name: "available",
  //   type: "Boolean",  // true or false
  //   componentType: "radio button",
  // },
  {
    label: "Path Name",
    name: "PathName",
    componentType: "input",
    type: "text",
    placeholder: "Enter Path Name",
  },
  {
    label: "Location",
    name: "location",
    componentType: "input",
    type: "text",
    placeholder: "Enter service location",
  },
];

export const addTeamSearchFormElements = [
  {
    label: "Name",
    name: "name",
    componentType: "input",
    type: "text",
    placeholder: "Enter The Name",
  },
  {
    label: "Service id",
    name: "serviceId",
    componentType: "input",
    type: "text",
    placeholder: "Enter Service ID",
  },
  // {
        // data that came from the Services to list all the profiles  
  // },
  {
    label: "Select From Time Range",
    name: "selectRange",
    componentType: "select", // this should Update on Day Basis
    options: [
      { value: "9-12", label: "9 AM - 12 PM" },
      { value: "12-3", label: "12 PM - 3 PM" },
      { value: "3-6", label: "3 PM - 6 PM" },
      { value: "6-9", label: "6 PM - 9 PM" },
    ],
  },
  
  // This all to Create a Profile
  // {
    //   label: "Full Name",
    //   name: "fullName",
  //   componentType: "input",
  //   type: "text",
  //   placeholder: "Enter You Full Name"
  // },
  // {
  //   label: "Display Name",
  //   name: "displayName",
  //   componentType: "input",
  //   type: "text",
  //   placeholder: "Enter You Display Name"
  // },
  // {
  //   label: "Select Category",
  //   name: "selectCategory",              // dropDown menu on services form the data provided
  //   componentType: "select",
  //   options: [
  //     // can select the work from the given data addService data
  //   ],
  // },
  // {
  // all the personal that required according to the India Law
  // },
];
