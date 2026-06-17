import Swal from "sweetalert2";

export const successAlert = (message) => {

    Swal.fire({

        icon: "success",

        title: "Success",

        text: message,

        confirmButtonColor: "#6d28d9",

        width: "22rem",

        showClass: {
            popup: "animate__animated animate__zoomIn"
        },

        hideClass: {
            popup: "animate__animated animate__zoomOut"
        },

        customClass: {
            popup: "nexthire-alert"
        }

    });

};

export const errorAlert = (message) => {

    Swal.fire({

        icon: "error",

        title: "Oops...",

        text: message,

        confirmButtonColor: "#dc2626",

        width: "22rem",

        showClass: {
            popup: "animate__animated animate__headShake"
        },

        hideClass: {
            popup: "animate__animated animate__zoomOut"
        },

        customClass: {
            popup: "nexthire-alert"
        }

    });

};