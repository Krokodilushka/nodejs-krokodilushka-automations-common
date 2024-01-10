export declare namespace ServerApi {
    namespace PfCheater {
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
