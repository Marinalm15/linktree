import {
  IBlockOptions,
  IConfirmOptions,
  ILoadingOptions,
  INotifyOptions,
  IReportOptions,
} from "notiflix";

interface NotiflixConstants {
  notify: INotifyOptions;
  report: IReportOptions;
  confirm: IConfirmOptions;
  loading: ILoadingOptions;
  block: IBlockOptions;
}

export default function useNotiflix(): NotiflixConstants {
  const notify: INotifyOptions = {
    position: "right-top",
    borderRadius: "5px",
    width: "350px",
    messageMaxLength: 200,
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: "zoom",
    showOnlyTheLastOne: true,
  };

  const report: IReportOptions = {};

  const confirm: IConfirmOptions = {
    borderRadius: "5px",
    width: "400px",
    titleMaxLength: 100,
    messageMaxLength: 200,
    okButtonBackground: "green",
    titleColor: "white",
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: "zoom",
  };

  const loading: ILoadingOptions = {};

  const block: IBlockOptions = {};

  return { notify, report, confirm, loading, block };
}
