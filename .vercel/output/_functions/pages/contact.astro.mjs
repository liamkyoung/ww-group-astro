import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_pS31TPf1.mjs';
import 'piccolore';
import { $ as $$SocialList } from '../chunks/SocialList_B_Xi2ZsZ.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useCallback, useState } from 'react';
import { FormProvider, Controller, useFormContext, useFormState, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Slot } from '@radix-ui/react-slot';
import { c as cn } from '../chunks/index_BG6C6zDl.mjs';
import * as LabelPrimitive from '@radix-ui/react-label';
import { toast as toast$1 } from 'react-hot-toast';
import '../chunks/_astro_assets_B4EDFosG.mjs';
import { $ as $$Default } from '../chunks/Default_mBGJLeJK.mjs';
export { renderers } from '../renderers.mjs';

function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

const Form = FormProvider;
const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}

function formatMessage({ title, description }) {
  if (title && description) return `${title} – ${description}`;
  if (description) return description;
  return title ?? "";
}
function toast(options) {
  const message = formatMessage(options);
  const duration = options.duration;
  switch (options.variant) {
    case "success":
      return toast$1.success(message, { duration });
    case "error":
      return toast$1.error(message, { duration });
    default:
      return toast$1(message, { duration });
  }
}
function useToast() {
  const showToast = useCallback((options) => toast(options), []);
  return {
    toast: showToast,
    // dismiss by id or all
    dismiss: (toastId) => {
      if (toastId) toast$1.dismiss(toastId);
      else toast$1.dismiss();
    }
  };
}

var ColorScheme = /* @__PURE__ */ ((ColorScheme2) => {
  ColorScheme2[ColorScheme2["DEFAULT"] = 0] = "DEFAULT";
  ColorScheme2[ColorScheme2["WHITE"] = 1] = "WHITE";
  ColorScheme2[ColorScheme2["RED"] = 2] = "RED";
  ColorScheme2[ColorScheme2["YELLOW"] = 3] = "YELLOW";
  return ColorScheme2;
})(ColorScheme || {});

function Spinner({ size = 4 }) {
  const twSize = `size-${size}`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: twSize,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
            opacity: ".25"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z",
            className: "fill-white animate-spin origin-center"
          }
        )
      ]
    }
  );
}

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name must be at least 1 character."
  }).max(50, "First name cannot exceed 50 characters"),
  lastName: z.string().min(1, {
    message: "Last name must be at least 1 character."
  }).max(50, "Last name cannot exceed 50 characters"),
  phoneNumber: z.string().regex(
    /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    "Phone number must be valid"
  ),
  // https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject line is required").max(100, "Subject line cannot exceed 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters long").max(1e3, "Message cannot exceed 1000 characters")
});
function ContactForm({ colorScheme = ColorScheme.DEFAULT }) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  const [sending, setSending] = useState(false);
  async function onSubmit(values) {
    setSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });
      const data = await response.json();
      if (response.ok) {
        toast({
          title: "✅ Your message has been sent!"
        });
      } else {
        toast({
          title: "❌ There was an error sending your message",
          description: "Please try again later."
        });
      }
    } catch (err) {
      toast({
        title: "❌ There was an error sending your message",
        description: "Please try again later."
      });
    } finally {
      setSending(false);
    }
  }
  const formInputStyle = colorScheme === ColorScheme.WHITE ? `bg-white text-wwBlack` : "focus:ring-1 ring-inset focus:ring-inset focus:ring-wwRed";
  const formTextStyle = colorScheme === ColorScheme.WHITE ? "text-white" : "text-wwBlack";
  const buttonStyle = colorScheme === ColorScheme.WHITE ? "btn-secondary" : "btn-primary";
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: `space-y-8 ${formTextStyle}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-2 gap-4`, children: [
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "firstName",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "First Name" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "First Name",
                    ...field,
                    className: formInputStyle
                  }
                ) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "lastName",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Last Name" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "Last Name",
                    ...field,
                    className: formInputStyle
                  }
                ) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "phoneNumber",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Phone Number" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "(123) 456 - 7890",
                    ...field,
                    className: formInputStyle
                  }
                ) }),
                /* @__PURE__ */ jsx(FormDescription, {}),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "email",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Email" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "example@gmail.com",
                    ...field,
                    className: formInputStyle
                  }
                ) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "subject",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Subject" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "Service Inquiry",
                    ...field,
                    className: formInputStyle
                  }
                ) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "message",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Message" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    placeholder: "Your message here",
                    className: `resize-none ${formInputStyle}`,
                    rows: 6,
                    ...field
                  }
                ) }),
                /* @__PURE__ */ jsx(FormDescription, { className: formTextStyle, children: "Please provide details about your request here and we will contact you on how we can help." }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: buttonStyle, disabled: sending, children: !sending ? /* @__PURE__ */ jsx("span", { children: "SEND MESSAGE" }) : /* @__PURE__ */ jsx(Spinner, { size: 6 }) })
      ]
    }
  ) });
}

const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Default", $$Default, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="global-margin-x my-24 overflow-hidden"> <div class="mb-16"> <h1>Send Us A Message!</h1> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center"> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/inputs/ContactForm", "client:component-export": "ContactForm" })} <div class="border-t-2 pt-12 lg:border-l-2 lg:border-t-0 lg:pt-0 lg:text-left border-wwRed pl-0 lg:pl-12"> ${renderComponent($$result2, "SocialList", $$SocialList, { "colorScheme": "red" })} </div> </div> </div> ` })}`;
}, "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/contact.astro", void 0);

const $$file = "C:/Users/liamk/Desktop/LKY/ww-group-astro/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
