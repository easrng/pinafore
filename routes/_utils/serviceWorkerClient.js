import { toast } from './toast'

function onUpdateFound (registration) {
  const newWorker = registration.installing

  newWorker.addEventListener('statechange', async () => {
    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
      toast.say('Update available. Refresh to update.')
    }
  })
}

if (!location.origin.match('localhost') && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(registration => {
    registration.addEventListener('updatefound', () => onUpdateFound(registration))
  })
}
