/**
 * Form validation construct.
 */
type Validators<TFormData extends object> = {
  [key in keyof TFormData]?: (
    value: TFormData[key] | undefined
  ) => string | void
}

export type { Validators }
