'use client'

import { HTMLAttributes, forwardRef } from 'react'

interface FormProps extends HTMLAttributes<HTMLFormElement> {}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <form
        className={`space-y-6 ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

Form.displayName = 'Form'

interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {}

const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div
        className={`space-y-2 ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

FormField.displayName = 'FormField'

interface FormLabelProps extends HTMLAttributes<HTMLLabelElement> {}

const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <label
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

FormLabel.displayName = 'FormLabel'

interface FormControlProps extends HTMLAttributes<HTMLDivElement> {}

const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div
        className={`relative ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

FormControl.displayName = 'FormControl'

interface FormMessageProps extends HTMLAttributes<HTMLParagraphElement> {}

const FormMessage = forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <p
        className={`text-sm font-medium text-destructive ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)

FormMessage.displayName = 'FormMessage'

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage
}
