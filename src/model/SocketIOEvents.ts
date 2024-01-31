import {Event} from "./webSocketEvents";
import * as z from "zod";

export namespace SocketIOEvents {

    export interface ServerToClientEvents {
        task: (
            taskID: string,
            task: Event.Task.Task.TaskZodType,
            callback: ((activeTasks: string[]) => void)
        ) => void;
        info: (callback: (info: ClientInfoType) => void) => void;
    }

    export interface ClientToServerEvents {
        task_response: (
            result: Event.Task.Result.TaskResultType,
            activeTasks: string[],
            callback: ((response: { status: 'success', message: string } | {
                status: 'error',
                reason: string
            }) => void),
        ) => void;
        info: (info: ClientInfoType) => void;
    }

    export const clientInfoZod = z.object({
        name: z.string(),
        status: z.enum(['active', 'stopped']),
        tasks: z.string().array(),
    })

    export interface ClientInfoType {
        name: string,
        status: 'active' | 'stopped',
        tasks: string[]
    }
}
