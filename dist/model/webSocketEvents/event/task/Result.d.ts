import * as z from "zod";
export declare const taskErrorZod: z.ZodObject<{
    status: z.ZodLiteral<"error">;
    message: z.ZodString;
}, "strict", z.ZodTypeAny, {
    message: string;
    status: "error";
}, {
    message: string;
    status: "error";
}>;
export type TaskErrorType = z.infer<typeof taskErrorZod>;
export declare const taskSuccessZod: z.ZodObject<{
    status: z.ZodLiteral<"success">;
    data: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"yandex_pf">;
        result: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"target_found">;
            page: z.ZodNumber;
            position: z.ZodNumber;
            targetUrl: z.ZodString;
            intermediateClicksOn: z.ZodArray<z.ZodObject<{
                page: z.ZodNumber;
                position: z.ZodNumber;
                url: z.ZodString;
                sleepMs: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }>, "many">;
        }, "strict", z.ZodTypeAny, {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }, {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }>, z.ZodObject<{
            type: z.ZodLiteral<"target_not_found">;
            intermediateClicksOn: z.ZodArray<z.ZodObject<{
                page: z.ZodNumber;
                position: z.ZodNumber;
                url: z.ZodString;
                sleepMs: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }, {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }>, "many">;
        }, "strict", z.ZodTypeAny, {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }, {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        }>]>;
    }, "strict", z.ZodTypeAny, {
        type: "yandex_pf";
        result: {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        } | {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        };
    }, {
        type: "yandex_pf";
        result: {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        } | {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"profile_walk">;
        result: z.ZodArray<z.ZodObject<{
            url: z.ZodString;
            result: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
                status: z.ZodLiteral<"error">;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                status: "error";
            }, {
                message: string;
                status: "error";
            }>, z.ZodObject<{
                status: z.ZodLiteral<"ok">;
            }, "strip", z.ZodTypeAny, {
                status: "ok";
            }, {
                status: "ok";
            }>]>;
        }, "strict", z.ZodTypeAny, {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }, {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }>, "many">;
    }, "strict", z.ZodTypeAny, {
        type: "profile_walk";
        result: {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }[];
    }, {
        type: "profile_walk";
        result: {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }[];
    }>]>;
}, "strict", z.ZodTypeAny, {
    data: {
        type: "yandex_pf";
        result: {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        } | {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        };
    } | {
        type: "profile_walk";
        result: {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }[];
    };
    status: "success";
}, {
    data: {
        type: "yandex_pf";
        result: {
            type: "target_found";
            page: number;
            position: number;
            targetUrl: string;
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        } | {
            type: "target_not_found";
            intermediateClicksOn: {
                url: string;
                page: number;
                position: number;
                sleepMs: number;
            }[];
        };
    } | {
        type: "profile_walk";
        result: {
            url: string;
            result: {
                message: string;
                status: "error";
            } | {
                status: "ok";
            };
        }[];
    };
    status: "success";
}>;
export type TaskSuccessType = z.infer<typeof taskSuccessZod>;
export declare const taskResultZod: z.ZodObject<{
    taskID: z.ZodString;
    browser: z.ZodOptional<z.ZodObject<{
        cookies: z.ZodNullable<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            domain: z.ZodString;
            path: z.ZodString;
            expires: z.ZodNumber;
            httpOnly: z.ZodBoolean;
            secure: z.ZodBoolean;
            sameSite: z.ZodEnum<["Strict", "Lax", "None"]>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            value: string;
            path: string;
            domain: string;
            expires: number;
            httpOnly: boolean;
            secure: boolean;
            sameSite: "Strict" | "Lax" | "None";
        }, {
            name: string;
            value: string;
            path: string;
            domain: string;
            expires: number;
            httpOnly: boolean;
            secure: boolean;
            sameSite: "Strict" | "Lax" | "None";
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cookies: {
            name: string;
            value: string;
            path: string;
            domain: string;
            expires: number;
            httpOnly: boolean;
            secure: boolean;
            sameSite: "Strict" | "Lax" | "None";
        }[] | null;
    }, {
        cookies: {
            name: string;
            value: string;
            path: string;
            domain: string;
            expires: number;
            httpOnly: boolean;
            secure: boolean;
            sameSite: "Strict" | "Lax" | "None";
        }[] | null;
    }>>;
    result: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
        status: z.ZodLiteral<"error">;
        message: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        message: string;
        status: "error";
    }, {
        message: string;
        status: "error";
    }>, z.ZodObject<{
        status: z.ZodLiteral<"success">;
        data: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"yandex_pf">;
            result: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                type: z.ZodLiteral<"target_found">;
                page: z.ZodNumber;
                position: z.ZodNumber;
                targetUrl: z.ZodString;
                intermediateClicksOn: z.ZodArray<z.ZodObject<{
                    page: z.ZodNumber;
                    position: z.ZodNumber;
                    url: z.ZodString;
                    sleepMs: z.ZodNumber;
                }, "strict", z.ZodTypeAny, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }>, "many">;
            }, "strict", z.ZodTypeAny, {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }, {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }>, z.ZodObject<{
                type: z.ZodLiteral<"target_not_found">;
                intermediateClicksOn: z.ZodArray<z.ZodObject<{
                    page: z.ZodNumber;
                    position: z.ZodNumber;
                    url: z.ZodString;
                    sleepMs: z.ZodNumber;
                }, "strict", z.ZodTypeAny, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }, {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }>, "many">;
            }, "strict", z.ZodTypeAny, {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }, {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            }>]>;
        }, "strict", z.ZodTypeAny, {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        }, {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        }>, z.ZodObject<{
            type: z.ZodLiteral<"profile_walk">;
            result: z.ZodArray<z.ZodObject<{
                url: z.ZodString;
                result: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
                    status: z.ZodLiteral<"error">;
                    message: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    message: string;
                    status: "error";
                }, {
                    message: string;
                    status: "error";
                }>, z.ZodObject<{
                    status: z.ZodLiteral<"ok">;
                }, "strip", z.ZodTypeAny, {
                    status: "ok";
                }, {
                    status: "ok";
                }>]>;
            }, "strict", z.ZodTypeAny, {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }, {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }>, "many">;
        }, "strict", z.ZodTypeAny, {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        }, {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        }>]>;
    }, "strict", z.ZodTypeAny, {
        data: {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        } | {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        };
        status: "success";
    }, {
        data: {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        } | {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        };
        status: "success";
    }>]>;
}, "strict", z.ZodTypeAny, {
    result: {
        message: string;
        status: "error";
    } | {
        data: {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        } | {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        };
        status: "success";
    };
    taskID: string;
    browser?: {
        cookies: {
            name: string;
            value: string;
            path: string;
            domain: string;
            expires: number;
            httpOnly: boolean;
            secure: boolean;
            sameSite: "Strict" | "Lax" | "None";
        }[] | null;
    } | undefined;
}, {
    result: {
        message: string;
        status: "error";
    } | {
        data: {
            type: "yandex_pf";
            result: {
                type: "target_found";
                page: number;
                position: number;
                targetUrl: string;
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            } | {
                type: "target_not_found";
                intermediateClicksOn: {
                    url: string;
                    page: number;
                    position: number;
                    sleepMs: number;
                }[];
            };
        } | {
            type: "profile_walk";
            result: {
                url: string;
                result: {
                    message: string;
                    status: "error";
                } | {
                    status: "ok";
                };
            }[];
        };
        status: "success";
    };
    taskID: string;
    browser?: {
        cookies: {
            name: string;
            value: string;
            path: string;
            domain: string;
            expires: number;
            httpOnly: boolean;
            secure: boolean;
            sameSite: "Strict" | "Lax" | "None";
        }[] | null;
    } | undefined;
}>;
export type TaskResultType = z.infer<typeof taskResultZod>;
