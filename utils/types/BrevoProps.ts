export interface NewContact {
    firstName?: string;
    lastName?: string;
    email: string;
    listIds: number[];
    updateEnabled: boolean;
    attributes?: object;
}

export interface UpdatedContact {
    email: string;
    listIds: number[];
    unlinkListIds: number[];
}

export interface MailContact {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    job: string;
    message: string;
}
