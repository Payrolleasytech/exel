// hooks/useToast.ts
import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface UseToastParams {
  type?: ToastType;
  title: string;
  description?: string;
  options?: ToastOptions;
}

export const useToast = () => {
  const triggerToast = ({ type = 'info', title, description, options }: UseToastParams) => {
    toast[type](
      <>
        <strong>{title}</strong>
        {description && <div>{description}</div>}
      </>,
      options
    );
  };

  return { triggerToast };
};
