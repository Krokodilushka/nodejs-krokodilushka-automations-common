import * as z from "zod";
export declare namespace ServerApi {
    namespace PfCheater {
        namespace ProfileGroups {
            namespace GET {
                const Response: z.ZodObject<{
                    items: z.ZodArray<z.ZodObject<{
                        id: z.ZodString;
                        description: z.ZodString;
                        walk: z.ZodObject<{
                            enabled: z.ZodBoolean;
                            proxy: z.ZodOptional<z.ZodString>;
                            moveMouse: z.ZodBoolean;
                            priority: z.ZodNumber;
                            walkGroup: z.ZodOptional<z.ZodNumber>;
                            walkImagesEnabled: z.ZodBoolean;
                            intervalMs: z.ZodObject<{
                                min: z.ZodNumber;
                                max: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                max: number;
                                min: number;
                            }, {
                                max: number;
                                min: number;
                            }>;
                            timeMsOnSite: z.ZodObject<{
                                min: z.ZodNumber;
                                max: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                max: number;
                                min: number;
                            }, {
                                max: number;
                                min: number;
                            }>;
                            visitSitesOnSession: z.ZodObject<{
                                min: z.ZodNumber;
                                max: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                max: number;
                                min: number;
                            }, {
                                max: number;
                                min: number;
                            }>;
                        }, "strip", z.ZodTypeAny, {
                            priority: number;
                            enabled: boolean;
                            moveMouse: boolean;
                            walkImagesEnabled: boolean;
                            intervalMs: {
                                max: number;
                                min: number;
                            };
                            timeMsOnSite: {
                                max: number;
                                min: number;
                            };
                            visitSitesOnSession: {
                                max: number;
                                min: number;
                            };
                            proxy?: string | undefined;
                            walkGroup?: number | undefined;
                        }, {
                            priority: number;
                            enabled: boolean;
                            moveMouse: boolean;
                            walkImagesEnabled: boolean;
                            intervalMs: {
                                max: number;
                                min: number;
                            };
                            timeMsOnSite: {
                                max: number;
                                min: number;
                            };
                            visitSitesOnSession: {
                                max: number;
                                min: number;
                            };
                            proxy?: string | undefined;
                            walkGroup?: number | undefined;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        id: string;
                        description: string;
                        walk: {
                            priority: number;
                            enabled: boolean;
                            moveMouse: boolean;
                            walkImagesEnabled: boolean;
                            intervalMs: {
                                max: number;
                                min: number;
                            };
                            timeMsOnSite: {
                                max: number;
                                min: number;
                            };
                            visitSitesOnSession: {
                                max: number;
                                min: number;
                            };
                            proxy?: string | undefined;
                            walkGroup?: number | undefined;
                        };
                    }, {
                        id: string;
                        description: string;
                        walk: {
                            priority: number;
                            enabled: boolean;
                            moveMouse: boolean;
                            walkImagesEnabled: boolean;
                            intervalMs: {
                                max: number;
                                min: number;
                            };
                            timeMsOnSite: {
                                max: number;
                                min: number;
                            };
                            visitSitesOnSession: {
                                max: number;
                                min: number;
                            };
                            proxy?: string | undefined;
                            walkGroup?: number | undefined;
                        };
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    items: {
                        id: string;
                        description: string;
                        walk: {
                            priority: number;
                            enabled: boolean;
                            moveMouse: boolean;
                            walkImagesEnabled: boolean;
                            intervalMs: {
                                max: number;
                                min: number;
                            };
                            timeMsOnSite: {
                                max: number;
                                min: number;
                            };
                            visitSitesOnSession: {
                                max: number;
                                min: number;
                            };
                            proxy?: string | undefined;
                            walkGroup?: number | undefined;
                        };
                    }[];
                }, {
                    items: {
                        id: string;
                        description: string;
                        walk: {
                            priority: number;
                            enabled: boolean;
                            moveMouse: boolean;
                            walkImagesEnabled: boolean;
                            intervalMs: {
                                max: number;
                                min: number;
                            };
                            timeMsOnSite: {
                                max: number;
                                min: number;
                            };
                            visitSitesOnSession: {
                                max: number;
                                min: number;
                            };
                            proxy?: string | undefined;
                            walkGroup?: number | undefined;
                        };
                    }[];
                }>;
            }
        }
        namespace Profiles {
            namespace POST {
                const Request: z.ZodObject<{
                    profileGroup: z.ZodString;
                    fingerprints: z.ZodArray<z.ZodObject<{
                        valid: z.ZodLiteral<true>;
                    }, "strip", z.ZodTypeAny, {
                        valid: true;
                    }, {
                        valid: true;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    profileGroup: string;
                    fingerprints: {
                        valid: true;
                    }[];
                }, {
                    profileGroup: string;
                    fingerprints: {
                        valid: true;
                    }[];
                }>;
            }
        }
        namespace Project {
            namespace Keywords {
                namespace GET {
                    const Response: z.ZodObject<{
                        _id: z.ZodString;
                        keyword: z.ZodString;
                        lastProcessedAt: z.ZodDate;
                        nextProcessAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }, {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }>;
                }
                namespace POST {
                    const Request: z.ZodObject<{
                        keywords: z.ZodArray<z.ZodObject<Pick<{
                            _id: z.ZodString;
                            keyword: z.ZodString;
                            lastProcessedAt: z.ZodDate;
                            nextProcessAt: z.ZodDate;
                        }, "keyword" | "nextProcessAt">, "strip", z.ZodTypeAny, {
                            keyword: string;
                            nextProcessAt: Date;
                        }, {
                            keyword: string;
                            nextProcessAt: Date;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        keywords: {
                            keyword: string;
                            nextProcessAt: Date;
                        }[];
                    }, {
                        keywords: {
                            keyword: string;
                            nextProcessAt: Date;
                        }[];
                    }>;
                }
            }
            namespace GET {
                const Response: z.ZodObject<{
                    _id: z.ZodString;
                    name: z.ZodString;
                    lr: z.ZodNumber;
                    maxPages: z.ZodNumber;
                    sleepMsOnSerp: z.ZodNumber;
                    sleepMsOnIntermediate: z.ZodNumber;
                    sleepMsOnTarget: z.ZodNumber;
                    clickOnIntermediateBeforeTarget: z.ZodNumber;
                    targetUrl: z.ZodString;
                    processIntervalMs: z.ZodObject<{
                        min: z.ZodNumber;
                        max: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        max: number;
                        min: number;
                    }, {
                        max: number;
                        min: number;
                    }>;
                    proxy: z.ZodOptional<z.ZodString>;
                    keywords: z.ZodArray<z.ZodObject<{
                        _id: z.ZodString;
                        keyword: z.ZodString;
                        lastProcessedAt: z.ZodDate;
                        nextProcessAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }, {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }>, "many">;
                }, "strip", z.ZodTypeAny, {
                    name: string;
                    lr: number;
                    _id: string;
                    keywords: {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }[];
                    maxPages: number;
                    sleepMsOnSerp: number;
                    sleepMsOnIntermediate: number;
                    sleepMsOnTarget: number;
                    clickOnIntermediateBeforeTarget: number;
                    targetUrl: string;
                    processIntervalMs: {
                        max: number;
                        min: number;
                    };
                    proxy?: string | undefined;
                }, {
                    name: string;
                    lr: number;
                    _id: string;
                    keywords: {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }[];
                    maxPages: number;
                    sleepMsOnSerp: number;
                    sleepMsOnIntermediate: number;
                    sleepMsOnTarget: number;
                    clickOnIntermediateBeforeTarget: number;
                    targetUrl: string;
                    processIntervalMs: {
                        max: number;
                        min: number;
                    };
                    proxy?: string | undefined;
                }>;
            }
            namespace POST {
                const Request: z.ZodObject<Pick<{
                    _id: z.ZodString;
                    name: z.ZodString;
                    lr: z.ZodNumber;
                    maxPages: z.ZodNumber;
                    sleepMsOnSerp: z.ZodNumber;
                    sleepMsOnIntermediate: z.ZodNumber;
                    sleepMsOnTarget: z.ZodNumber;
                    clickOnIntermediateBeforeTarget: z.ZodNumber;
                    targetUrl: z.ZodString;
                    processIntervalMs: z.ZodObject<{
                        min: z.ZodNumber;
                        max: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        max: number;
                        min: number;
                    }, {
                        max: number;
                        min: number;
                    }>;
                    proxy: z.ZodOptional<z.ZodString>;
                    keywords: z.ZodArray<z.ZodObject<{
                        _id: z.ZodString;
                        keyword: z.ZodString;
                        lastProcessedAt: z.ZodDate;
                        nextProcessAt: z.ZodDate;
                    }, "strip", z.ZodTypeAny, {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }, {
                        _id: string;
                        keyword: string;
                        lastProcessedAt: Date;
                        nextProcessAt: Date;
                    }>, "many">;
                }, "name" | "lr" | "proxy" | "sleepMsOnSerp" | "sleepMsOnIntermediate" | "sleepMsOnTarget" | "clickOnIntermediateBeforeTarget" | "targetUrl" | "processIntervalMs">, "strip", z.ZodTypeAny, {
                    name: string;
                    lr: number;
                    sleepMsOnSerp: number;
                    sleepMsOnIntermediate: number;
                    sleepMsOnTarget: number;
                    clickOnIntermediateBeforeTarget: number;
                    targetUrl: string;
                    processIntervalMs: {
                        max: number;
                        min: number;
                    };
                    proxy?: string | undefined;
                }, {
                    name: string;
                    lr: number;
                    sleepMsOnSerp: number;
                    sleepMsOnIntermediate: number;
                    sleepMsOnTarget: number;
                    clickOnIntermediateBeforeTarget: number;
                    targetUrl: string;
                    processIntervalMs: {
                        max: number;
                        min: number;
                    };
                    proxy?: string | undefined;
                }>;
            }
        }
    }
}
