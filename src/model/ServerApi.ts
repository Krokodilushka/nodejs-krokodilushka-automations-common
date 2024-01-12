import * as z from "zod"

export namespace ServerApi {
    export namespace PfCheater {
        export namespace ProfileGroups {
            export namespace GET {
                export const Response = z.object({
                    items: z.array(z.object({
                        id: z.string(),
                        description: z.string(),
                        createdAt: z.number(),
                        walk: z.object({
                            enabled: z.boolean(),
                            proxy: z.string().optional(),
                            moveMouse: z.boolean(),
                            priority: z.number(),
                            walkGroup: z.number().optional(),
                            walkImagesEnabled: z.boolean(),
                            intervalMs: z.object({min: z.number(), max: z.number()}),
                            timeMsOnSite: z.object({min: z.number(), max: z.number()}),
                            visitSitesOnSession: z.object({min: z.number(), max: z.number()}),
                        })
                    }))
                })
            }
        }
        export namespace ProfileGroup {
            export namespace POST {
                export const Request = z.object({
                    description: z.string().min(1),
                    walk: z.object({
                        enabled: z.boolean(),
                        proxy: z.string().optional(),
                        moveMouse: z.boolean(),
                        priority: z.number(),
                        walkGroup: z.number().optional(),
                        walkImagesEnabled: z.boolean(),
                        intervalMs: z.object({min: z.number(), max: z.number()}),
                        timeMsOnSite: z.object({min: z.number(), max: z.number()}),
                        visitSitesOnSession: z.object({min: z.number(), max: z.number()}),
                    })
                })
            }
        }
        export namespace Profiles {
            export namespace POST {
                export const Request = z.object({
                    profileGroup: z.string().min(1),
                    fingerprints: z.array(z.object({valid: z.literal(true)}))
                })
            }
        }
        export namespace Project {
            export namespace Keywords {
                export namespace GET {
                    export const Response = z.object({
                        _id: z.string().min(1),
                        keyword: z.string().min(1),
                        lastProcessedAt: z.date(),
                        nextProcessAt: z.date(),
                    })
                }
                export namespace POST {
                    export const Request = z.object({
                        keywords: z.array(
                            GET.Response.pick({
                                keyword: true,
                                nextProcessAt: true
                            })
                        )
                    })
                }
            }
            export namespace GET {
                export const Response = z.object({
                    _id: z.string().min(1),
                    name: z.string().min(1),
                    lr: z.number().min(1),
                    maxPages: z.number().min(1).max(50),
                    sleepMsOnSerp: z.number().min(1),
                    sleepMsOnIntermediate: z.number().min(1),
                    sleepMsOnTarget: z.number().min(1),
                    clickOnIntermediateBeforeTarget: z.number().min(0),
                    targetUrl: z.string().url(),
                    processIntervalMs: z.object({min: z.number().min(1), max: z.number().min(1)}),
                    proxy: z.string().optional(),
                    keywords: z.array(Project.Keywords.GET.Response)
                })
            }

            export namespace POST {
                export const Request = GET.Response.pick({
                    name: true,
                    lr: true,
                    sleepMsOnSerp: true,
                    sleepMsOnIntermediate: true,
                    sleepMsOnTarget: true,
                    clickOnIntermediateBeforeTarget: true,
                    targetUrl: true,
                    processIntervalMs: true,
                    proxy: true,
                })
            }
        }
    }
}
