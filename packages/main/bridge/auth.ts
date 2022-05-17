import * as express from "express";
import { db } from "../db";

export function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
) {
    if (securityName === "api_key") {
        let serviceKey: any;
        if (request.headers && request.headers.authorization) {
            serviceKey = request.headers.authorization;
        }


        if (!serviceKey) {
            return Promise.reject({ success: false, reason: 'Please provice a valid serviceKey' })
        }

        return Promise.resolve(new Promise<any>((resolve, reject) => {
            db.findOne({ type: 'service', serviceKey }, (err: any, doc: any) => {
                if (!doc) {
                    return reject({ success: false, reason: 'Please provice a valid serviceKey' })
                } else {
                    return resolve({})
                }
            })
        }))

    }
    return Promise.reject({ success: false, reason: 'Please provice a valid serviceKey' })
}
