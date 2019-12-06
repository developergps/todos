import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const BORRAR_COMPLETADOS_TODO = '[TODO] Borrar completados todo';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) {}
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado: boolean) {}
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: number) {}
}

export class BorrarCompletadosAction implements Action {
    readonly type = BORRAR_COMPLETADOS_TODO;
}

export type Acciones = AgregarTodoAction |
                       ToggleTodoAction |
                       ToggleAllTodoAction |
                       EditarTodoAction |
                       BorrarCompletadosAction |
                       BorrarTodoAction;
