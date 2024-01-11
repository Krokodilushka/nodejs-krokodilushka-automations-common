"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApi = void 0;
const z = require("zod");
var ServerApi;
(function (ServerApi) {
    let PfCheater;
    (function (PfCheater) {
        let ProfileGroups;
        (function (ProfileGroups) {
            let GET;
            (function (GET) {
                GET.Response = z.object({
                    description: z.string().min(1),
                    enabled: z.boolean(),
                    proxy: z.string().optional(),
                    moveMouse: z.boolean(),
                    priority: z.number(),
                    walkGroup: z.number().optional(),
                    walkImagesEnabled: z.boolean(),
                    intervalMs: z.object({ min: z.number(), max: z.number() }),
                    timeMsOnSite: z.object({ min: z.number(), max: z.number() }),
                    visitSitesOnSession: z.object({ min: z.number(), max: z.number() }),
                });
            })(GET = ProfileGroups.GET || (ProfileGroups.GET = {}));
        })(ProfileGroups = PfCheater.ProfileGroups || (PfCheater.ProfileGroups = {}));
        let Profiles;
        (function (Profiles) {
            let POST;
            (function (POST) {
                POST.Request = z.object({
                    profileGroup: z.string().min(1),
                    fingerprints: z.array(z.object({ valid: z.literal(true) }))
                });
            })(POST = Profiles.POST || (Profiles.POST = {}));
        })(Profiles = PfCheater.Profiles || (PfCheater.Profiles = {}));
        let Project;
        (function (Project) {
            let Keywords;
            (function (Keywords) {
                let GET;
                (function (GET) {
                    GET.Response = z.object({
                        _id: z.string().min(1),
                        keyword: z.string().min(1),
                        lastProcessedAt: z.date(),
                        nextProcessAt: z.date(),
                    });
                })(GET = Keywords.GET || (Keywords.GET = {}));
                let POST;
                (function (POST) {
                    POST.Request = z.object({
                        keywords: z.array(GET.Response.pick({
                            keyword: true,
                            nextProcessAt: true
                        }))
                    });
                })(POST = Keywords.POST || (Keywords.POST = {}));
            })(Keywords = Project.Keywords || (Project.Keywords = {}));
            let GET;
            (function (GET) {
                GET.Response = z.object({
                    _id: z.string().min(1),
                    name: z.string().min(1),
                    lr: z.number().min(1),
                    maxPages: z.number().min(1).max(50),
                    sleepMsOnSerp: z.number().min(1),
                    sleepMsOnIntermediate: z.number().min(1),
                    sleepMsOnTarget: z.number().min(1),
                    clickOnIntermediateBeforeTarget: z.number().min(0),
                    targetUrl: z.string().url(),
                    processIntervalMs: z.object({ min: z.number().min(1), max: z.number().min(1) }),
                    proxy: z.string().optional(),
                    keywords: z.array(Project.Keywords.GET.Response)
                });
            })(GET = Project.GET || (Project.GET = {}));
            let POST;
            (function (POST) {
                POST.Request = GET.Response.pick({
                    name: true,
                    lr: true,
                    sleepMsOnSerp: true,
                    sleepMsOnIntermediate: true,
                    sleepMsOnTarget: true,
                    clickOnIntermediateBeforeTarget: true,
                    targetUrl: true,
                    processIntervalMs: true,
                    proxy: true,
                });
            })(POST = Project.POST || (Project.POST = {}));
        })(Project = PfCheater.Project || (PfCheater.Project = {}));
    })(PfCheater = ServerApi.PfCheater || (ServerApi.PfCheater = {}));
})(ServerApi || (exports.ServerApi = ServerApi = {}));
