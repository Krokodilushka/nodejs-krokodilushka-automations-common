
export namespace QueueTask {
    export interface QueueTask<T extends TaskParams> {
        taskID: string
        fingerprint: any
        cookies: Cookie[]
        proxy?: string
        priority?: number
        params: T,
        ensureShowImagesMode: boolean
    }

    export interface QueueTaskResult<T extends TaskResult> {
        taskID: string
        cookies: Cookie[]
        result: TTaskResult<T>
    }

    export interface TaskError {
        status: 'error'
        message: string
    }

    export interface TaskResult {
    }

    export type TTaskResult<T extends TaskResult> = TaskError | T

    export interface TaskParams {
        type: TaskType
    }

    export enum TaskType {
        PROFILE_WALK = 0,
        YANDEX_CHEAT = 1,
    }

    export namespace ProfileWalkTask {

        export namespace Params {
            export interface Params extends QueueTask.TaskParams {
                type: QueueTask.TaskType.PROFILE_WALK,
                moveMouse: boolean
                steps: UrlToWalk[]
            }

            export type UrlToWalk = {
                url: string,
                sleepOnPageMs: number,
            }
        }

        export namespace Result {
            export interface Result extends QueueTask.TaskResult {
                result: TaskResponse[]
            }

            export type TaskResponse = { status: 'ok' | 'error', url: string, error?: string }
        }

    }

    export namespace YandexCheatTask {

        export namespace Params {
            export interface Params extends QueueTask.TaskParams {
                type: QueueTask.TaskType.YANDEX_CHEAT
                keywordID: string,
                keyword: string
                moveMouseOnSerp: boolean
                lr: number
                maxPages: number
                sleepMsOnSerp: number
                sleepMsOnIntermediate: number
                sleepMsOnTarget: number
                clickOnIntermediateBeforeTarget: number
                targetUrl: string,
                followLinks: boolean,
                profileInfo: {
                    walksCount: number,
                    firstWalk: Date | null,
                    lastWalk: Date | null,
                    cookies: { domain: string, name: string }[]
                }
            }
        }

        export namespace Result {
            export interface Result extends QueueTask.TaskResult {
                yandexCheatTaskResultType: YANDEX_CHEAT_TASK_RESULT_TYPE
            }

            export interface TaskTargetFound extends Result {
                yandexCheatTaskResultType: YANDEX_CHEAT_TASK_RESULT_TYPE.TARGET_FOUND
                page: number
                position: number
                targetUrl: string
                intermediateClicksOn: IntermediateClicksOn[]
            }

            export interface NotFound extends Result {
                yandexCheatTaskResultType: YANDEX_CHEAT_TASK_RESULT_TYPE.TARGET_NOT_FOUND
                intermediateClicksOn: IntermediateClicksOn[]
            }

            export enum YANDEX_CHEAT_TASK_RESULT_TYPE {
                TARGET_FOUND = 0,
                TARGET_NOT_FOUND = 1
            }

            export interface IntermediateClicksOn {
                page: number
                position: number
                url: string
                sleepMs: number
            }
        }
    }
}

export type Cookie = {
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: "Strict" | "Lax" | "None";
}
