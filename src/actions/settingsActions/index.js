import { setLaunchAtLogin } from "./generalActions"
import {
    setDownloadLimit,
    setDownloadLimitSpeed,
    setUploadLimit,
    setUploadLimitSpeed,
} from "./bandwidthActions"
import {
    setOption,
    setProtocol,
} from "./proxyActions";
import {
    setContent,
    initSettings,
    cancelSettings,
    confirmSettings,
} from "./otherActions"

export {
    setLaunchAtLogin,
    setDownloadLimit,
    setDownloadLimitSpeed,
    setUploadLimit,
    setUploadLimitSpeed,
    setOption,
    setProtocol,
    setContent,
    initSettings,
    cancelSettings,
    confirmSettings,
}
