import { Event } from "./webSocketEvents";
import * as z from "zod";
export declare namespace SocketIOEvents {
    interface ServerToClientEvents {
        task: (taskID: string, task: Event.Task.Task.TaskZodType, callback: ((activeTasks: string[]) => void)) => void;
        info: (callback: (info: ClientInfoType) => void) => void;
    }
    interface ClientToServerEvents {
        task_response: (result: Event.Task.Result.TaskResultType, activeTasks: string[], callback: ((response: {
            status: 'success';
            message: string;
        } | {
            status: 'error';
            reason: string;
        }) => void)) => void;
        info: (info: ClientInfoType) => void;
    }
    const clientInfoZod: z.ZodObject<{
        name: z.ZodString;
        status: z.ZodEnum<["active", "stopped"]>;
        tasks: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        status: "active" | "stopped";
        tasks: string[];
    }, {
        name: string;
        status: "active" | "stopped";
        tasks: string[];
    }>;
    interface ClientInfoType {
        name: string;
        status: 'active' | 'stopped';
        tasks: string[];
    }
}
