import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('auth/register', 'AuthController.register')
  Route.post('auth/login', 'AuthController.login')

  Route.get('shipments', 'ShipmentsController.index')
  Route.post('shipments', 'ShipmentsController.store')
  Route.get('shipments/:id', 'ShipmentsController.show')
  Route.patch('shipments/:id', 'ShipmentsController.update')
  Route.delete('shipments/:id', 'ShipmentsController.destroy')
  Route.get('tracking/:id', 'ShipmentsController.tracking')

  Route.get('manifests', 'ManifestsController.index')
  Route.post('manifests', 'ManifestsController.store')
  Route.get('manifests/:id', 'ManifestsController.show')
  Route.patch('manifests/:id', 'ManifestsController.update')
}).prefix('api')
