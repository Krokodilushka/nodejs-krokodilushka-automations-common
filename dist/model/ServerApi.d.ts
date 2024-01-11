export declare namespace ServerApi {
    namespace PfCheater {
        namespace ProfileGroups {
            interface ProfileGroup {
                description: string;
                enabled: boolean;
                intervalMs: {
                    min: number;
                    max: number;
                };
                proxy: string | null;
                moveMouse: boolean;
                timeMsOnSite: {
                    min: number;
                    max: number;
                };
                visitSitesOnSession: {
                    min: number;
                    max: number;
                };
                priority: number | null;
                walkGroup: number | null;
                walkImagesEnabled: boolean | null;
            }
        }
        namespace Profiles {
            interface Create {
                profileGroup: string;
                fingerprints: any[];
            }
        }
        namespace Project {
            interface Project {
                _id: string;
                name: string;
                lr: number;
                maxPages: number;
                sleepMsOnSerp: number;
                sleepMsOnIntermediate: number;
                sleepMsOnTarget: number;
                clickOnIntermediateBeforeTarget: number;
                targetUrl: string;
                processIntervalMs: {
                    min: number;
                    max: number;
                };
                keywords: Keywords.ProjectKeyword[];
                proxy?: string;
            }
            interface ProjectCreate {
                name: string;
                lr: number;
                maxPages: number;
                sleepMsOnSerp: number;
                sleepMsOnIntermediate: number;
                sleepMsOnTarget: number;
                clickOnIntermediateBeforeTarget: number;
                targetUrl: string;
                processIntervalMs: {
                    min: number;
                    max: number;
                };
                proxy?: string;
            }
            namespace Keywords {
                interface ProjectKeyword {
                    _id: string;
                    keyword: string;
                    lastProcessedAt?: Date;
                    nextProcessAt?: Date;
                }
                type KeywordsCreate = {
                    keywords: KeywordCreate[];
                };
                type KeywordCreate = {
                    keyword: string;
                    nextProcessAt: number;
                };
            }
        }
    }
}
