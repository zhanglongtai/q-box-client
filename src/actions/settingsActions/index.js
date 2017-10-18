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
    cancelSettings,
    confirmSettings,
}
