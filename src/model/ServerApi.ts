export namespace ServerApi {
    export namespace PfCheater {
        export namespace ProfileGroups {
            export interface ProfileGroup {
                description: string
                enabled: boolean
                intervalMs: { min: number, max: number }
                proxy: string | null
                moveMouse: boolean
                timeMsOnSite: { min: number, max: number }
                visitSitesOnSession: { min: number, max: number }
                priority: number | null,
                walkGroup: number | null,
                walkImagesEnabled: boolean | null
            }
        }
        export namespace Profiles {
            export interface Create {
                profileGroup: string
                fingerprints: any[]
            }
        }
        export namespace Project {
            export interface Project {
                _id: string,
                name: string,
                lr: number,
                maxPages: number,
                sleepMsOnSerp: number,
                sleepMsOnIntermediate: number,
                sleepMsOnTarget: number,
                clickOnIntermediateBeforeTarget: number,
                targetUrl: string,
                processIntervalMs: { min: number, max: number },
                keywords: Keywords.ProjectKeyword[],
                proxy?: string,
            }

            export interface ProjectCreate {
                name: string,
                lr: number,
                maxPages: number,
                sleepMsOnSerp: number,
                sleepMsOnIntermediate: number,
                sleepMsOnTarget: number,
                clickOnIntermediateBeforeTarget: number,
                targetUrl: string,
                processIntervalMs: { min: number, max: number },
                proxy?: string,
            }

            export namespace Keywords {
                export interface ProjectKeyword {
                    _id: string,
                    keyword: string,
                    lastProcessedAt?: Date,
                    nextProcessAt?: Date,
                }

                export type KeywordsCreate = {
                    keywords: KeywordCreate[]
                }

                export type KeywordCreate = {
                    keyword: string,
                    nextProcessAt: number,
                }
            }
        }
    }
}
