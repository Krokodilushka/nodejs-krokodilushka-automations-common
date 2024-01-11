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
            ProfileGroups.ProfileGroup = z.object({
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
        })(ProfileGroups = PfCheater.ProfileGroups || (PfCheater.ProfileGroups = {}));
        let Profiles;
        (function (Profiles) {
            Profiles.Create = z.object({
                profileGroup: z.string().min(1),
                fingerprints: z.array(z.object({ valid: z.string().startsWith('valid').length(5) }))
            });
        })(Profiles = PfCheater.Profiles || (PfCheater.Profiles = {}));
        let Project;
        (function (Project_1) {
            Project_1.Project = z.object({
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
                keywords: z.array(Keywords.ProjectKeyword)
            });
            Project_1.ProjectCreate = Project_1.Project.pick({
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
            let Keywords;
            (function (Keywords) {
                Keywords.ProjectKeyword = z.object({
                    _id: z.string().min(1),
                    keyword: z.string().min(1),
                    lastProcessedAt: z.date(),
                    nextProcessAt: z.date(),
                });
                Keywords.KeywordCreate = Keywords.ProjectKeyword.pick({
                    keyword: true,
                    nextProcessAt: true
                });
                Keywords.KeywordsCreate = z.object({
                    keywords: z.array(Keywords.KeywordCreate)
                });
            })(Keywords = Project_1.Keywords || (Project_1.Keywords = {}));
        })(Project = PfCheater.Project || (PfCheater.Project = {}));
    })(PfCheater = ServerApi.PfCheater || (ServerApi.PfCheater = {}));
})(ServerApi || (exports.ServerApi = ServerApi = {}));
