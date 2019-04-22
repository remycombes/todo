import { defer, ReplaySubject } from 'rxjs';
import { ParamMap, Params, convertToParamMap } from '@angular/router';
import { Injectable } from '@angular/core';

// UTILITAIRES DONNEES ASYNCHRONES
export function donneeAsynchrone<T>(data: T) {
    return defer(() => Promise.resolve(data)); }

export function erreurAsynchrone<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject)); }
