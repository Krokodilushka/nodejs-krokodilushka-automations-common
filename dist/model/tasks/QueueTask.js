"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueueTask = void 0;
var QueueTask;
(function (QueueTask) {
    let TaskType;
    (function (TaskType) {
        TaskType[TaskType["PROFILE_WALK"] = 0] = "PROFILE_WALK";
        TaskType[TaskType["YANDEX_CHEAT"] = 1] = "YANDEX_CHEAT";
    })(TaskType = QueueTask.TaskType || (QueueTask.TaskType = {}));
    let YandexCheatTask;
    (function (YandexCheatTask) {
        let Result;
        (function (Result) {
            let YANDEX_CHEAT_TASK_RESULT_TYPE;
            (function (YANDEX_CHEAT_TASK_RESULT_TYPE) {
                YANDEX_CHEAT_TASK_RESULT_TYPE[YANDEX_CHEAT_TASK_RESULT_TYPE["TARGET_FOUND"] = 0] = "TARGET_FOUND";
                YANDEX_CHEAT_TASK_RESULT_TYPE[YANDEX_CHEAT_TASK_RESULT_TYPE["TARGET_NOT_FOUND"] = 1] = "TARGET_NOT_FOUND";
            })(YANDEX_CHEAT_TASK_RESULT_TYPE = Result.YANDEX_CHEAT_TASK_RESULT_TYPE || (Result.YANDEX_CHEAT_TASK_RESULT_TYPE = {}));
        })(Result = YandexCheatTask.Result || (YandexCheatTask.Result = {}));
    })(YandexCheatTask = QueueTask.YandexCheatTask || (QueueTask.YandexCheatTask = {}));
})(QueueTask || (exports.QueueTask = QueueTask = {}));
