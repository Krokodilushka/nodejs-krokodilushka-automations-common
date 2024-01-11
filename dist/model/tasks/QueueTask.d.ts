export declare namespace QueueTask {
    interface QueueTask<T extends TaskParams> {
        taskID: string;
        fingerprint: any;
        cookies: Cookie[];
        proxy?: string;
        priority?: number;
        params: T;
        ensureShowImagesMode: boolean;
    }
    interface QueueTaskResult<T extends TaskResult> {
        taskID: string;
        cookies: Cookie[] | null;
        result: TTaskResult<T>;
    }
    interface TaskError {
        status: 'error';
        message: string;
    }
    interface TaskResult {
    }
    type TTaskResult<T extends TaskResult> = TaskError | T;
    interface TaskParams {
        type: TaskType;
    }
    enum TaskType {
        PROFILE_WALK = 0,
        YANDEX_CHEAT = 1
    }
    namespace ProfileWalkTask {
        namespace Params {
            interface Params extends QueueTask.TaskParams {
                type: QueueTask.TaskType.PROFILE_WALK;
                moveMouse: boolean;
                steps: UrlToWalk[];
            }
            type UrlToWalk = {
                url: string;
                sleepOnPageMs: number;
            };
        }
        namespace Result {
            interface Result extends QueueTask.TaskResult {
                result: TaskResponse[];
            }
            type TaskResponse = {
                status: 'ok' | 'error';
                url: string;
                error?: string;
            };
        }
    }
    namespace YandexCheatTask {
        namespace Params {
            interface Params extends QueueTask.TaskParams {
                type: QueueTask.TaskType.YANDEX_CHEAT;
                keywordID: string;
                keyword: string;
                moveMouseOnSerp: boolean;
                lr: number;
                maxPages: number;
                sleepMsOnSerp: number;
                sleepMsOnIntermediate: number;
                sleepMsOnTarget: number;
                clickOnIntermediateBeforeTarget: number;
                targetUrl: string;
                followLinks: boolean;
                profileInfo: {
                    walksCount: number;
                    firstWalk: Date | null;
                    lastWalk: Date | null;
                    cookies: {
                        domain: string;
                        name: string;
                    }[];
                };
            }
        }
        namespace Result {
            interface Result extends QueueTask.TaskResult {
                yandexCheatTaskResultType: YANDEX_CHEAT_TASK_RESULT_TYPE;
            }
            interface TaskTargetFound extends Result {
                yandexCheatTaskResultType: YANDEX_CHEAT_TASK_RESULT_TYPE.TARGET_FOUND;
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: IntermediateClicksOn[];
            }
            interface NotFound extends Result {
                yandexCheatTaskResultType: YANDEX_CHEAT_TASK_RESULT_TYPE.TARGET_NOT_FOUND;
                intermediateClicksOn: IntermediateClicksOn[];
            }
            enum YANDEX_CHEAT_TASK_RESULT_TYPE {
                TARGET_FOUND = 0,
                TARGET_NOT_FOUND = 1
            }
            interface IntermediateClicksOn {
                page: number;
                position: number;
                url: string;
                sleepMs: number;
            }
        }
    }
    type Cookie = {
        name: string;
        value: string;
        domain: string;
        path: string;
        expires: number;
        httpOnly: boolean;
        secure: boolean;
        sameSite: "Strict" | "Lax" | "None";
    };
}
