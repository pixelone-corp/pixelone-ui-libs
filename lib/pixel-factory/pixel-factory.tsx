import React from "react";
import styled from "styled-components";
import { Block, Confirm, Loading, Notify } from "notiflix";
import { $primaryColor, $secondaryColor } from "../styleGuide";
interface IContextProps {
  showLoader: Function;
  hideLoader: Function;
  showPageLoader: Function;
  hidePageLoader: Function;
  showSuccess: Function;
  showFailure: Function;
  showInfo: Function;
  showWarning: Function;
  removeNotification: Function;
  pixelConfirm: Function;
  pixelPrompt: Function;
}

export const PixelFactoryContext = React.createContext({} as IContextProps);

export default React.memo(({ children }:any) => {
  React.useEffect(() => {
    Block.init({
      querySelectorLimit: 200,
      className: "notiflix-block",
      position: "absolute",
      zindex: 1000,
      backgroundColor: "rgba(255,255,255,0.3)",
      rtl: false,
      fontFamily: "Poppins",
      cssAnimation: true,
      cssAnimationDuration: 300,
      svgSize: "45px",
      svgColor: "#383838",
      messageFontSize: "14px",
      messageMaxLength: 34,
      messageColor: "#383838",
    });
    Notify.init({
      position: "right-top",
      opacity: 1,
      borderRadius: "5px",
      messageMaxLength: 5000,
      plainText: true,
      showOnlyTheLastOne: true,
      clickToClose: true,
      pauseOnHover: false,
      zindex: 99999999999,
      fontFamily: "Poppins",
      useIcon: false,
      success: {
        background: "#32c682",
        textColor: "#fff",
        childClassName: "notiflix-notify-success",
        notiflixIconColor: "rgba(0,0,0,0.2)",
        fontAwesomeClassName: "fas fa-check-circle",
        fontAwesomeIconColor: "rgba(0,0,0,0.2)",
        backOverlayColor: "rgba(50,198,130,0.2)",
      },
      failure: {
        background: "#ff5549",
        textColor: "#fff",
        childClassName: "notiflix-notify-failure",
        notiflixIconColor: "rgba(0,0,0,0.2)",
        fontAwesomeClassName: "fas fa-times-circle",
        fontAwesomeIconColor: "rgba(0,0,0,0.2)",
        backOverlayColor: "rgba(255,85,73,0.2)",
      },
      warning: {
        background: "#eebf31",
        textColor: "#fff",
        childClassName: "notiflix-notify-warning",
        notiflixIconColor: "rgba(0,0,0,0.2)",
        fontAwesomeClassName: "fas fa-exclamation-circle",
        fontAwesomeIconColor: "rgba(0,0,0,0.2)",
        backOverlayColor: "rgba(238,191,49,0.2)",
      },
      info: {
        background: "#26c0d3",
        textColor: "#fff",
        childClassName: "notiflix-notify-info",
        notiflixIconColor: "rgba(0,0,0,0.2)",
        fontAwesomeClassName: "fas fa-info-circle",
        fontAwesomeIconColor: "rgba(0,0,0,0.2)",
        backOverlayColor: "rgba(38,192,211,0.2)",
      },
    });

    Loading.init({
      className: "notiflix-loading",
      zindex: 9999999999999999,
      backgroundColor: "rgba(0,0,0,0.8)",
      rtl: false,
      fontFamily: "Poppins",
      cssAnimation: true,
      cssAnimationDuration: 400,
      clickToClose: false,
      customSvgUrl: null,
      customSvgCode: null,
      svgSize: "80px",
      svgColor: "#32c682",
      messageID: "NotiflixLoadingMessage",
      messageFontSize: "15px",
      messageMaxLength: 34,
      messageColor: "#dcdcdc",
    });
    Confirm.init({
      className: "notiflix-confirm",
      width: "300px",
      zindex: 4003,
      position: "center",
      distance: "10px",
      backgroundColor: "#f8f8f8",
      borderRadius: "5px",
      backOverlay: true,
      backOverlayColor: "rgba(0,0,0,0.5)",
      rtl: false,
      fontFamily: "Poppins",
      cssAnimation: true,
      cssAnimationDuration: 300,
      cssAnimationStyle: "fade",
      plainText: false,
      titleColor: $primaryColor,
      titleFontSize: "16px",
      titleMaxLength: 34,
      messageColor: "#1e1e1e",
      messageFontSize: "14px",
      messageMaxLength: 99999,
      buttonsFontSize: "15px",
      buttonsMaxLength: 34,
      okButtonColor: "#ffffff",
      okButtonBackground: $primaryColor,
      cancelButtonColor: "#ffffff",
      cancelButtonBackground: $secondaryColor,
    });
  }, []);
  const showPageLoader = () => {
    Loading.circle();
  };
  const hidePageLoader = () => {
    Loading.remove();
  };
  const showLoader = (ref) => {
    try {
      const className = ref?.current?.className;
      Block.circle(`.${className?.replace(/ /g, ".")}`);
    } catch (error) {}
  };
  const hideLoader = (ref) => {
    try {
      const className = ref?.current?.className;

      Block.remove(`.${className?.replace(/ /g, ".")}`);
    } catch (error) {
      // console.log(error);
    }
  };

  const showSuccess = (message = "") => {
    Notify.success(message);
  };
  const showFailure = (message = "") => {
    Notify.failure(message);
  };
  const showInfo = (message = "") => {
    Notify.info(message);
  };
  const showWarning = (message = "") => {
    Notify.warning(message);
  };
  const removeNotification = () => {
    // TODO: Frank
  };

  const pixelConfirm = (opt) => {
    Confirm.show(
      opt.title || "",
      opt.message || "",
      "Yes",
      "No",
      () => {
        opt.onConfirm && opt.onConfirm();
      },
      () => {
        opt.onDecline && opt.onDecline();
      },
      {}
    );
  };

  const pixelPrompt = (opt) => {
    Confirm.prompt(
      opt.title || "",
      opt.message || "",
      "",
      "Yes",
      "No",
      (a) => {
        opt.onConfirm && opt.onConfirm(a);
      },
      (a) => {
        opt.onDecline && opt.onDecline(a);
      },
      {}
    );
  };

  const defaultContext = {
    showLoader,
    hideLoader,
    showPageLoader,
    hidePageLoader,
    showSuccess,
    showFailure,
    showInfo,
    showWarning,
    removeNotification,
    pixelConfirm,
    pixelPrompt,
  };

  return (
    <PixelFactoryContext.Provider value={defaultContext}>
      {children}
    </PixelFactoryContext.Provider>
  );
});
