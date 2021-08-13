'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    create: async (ctx) => {
        
        const {user} = ctx.state;
        

        // Register the order in the database
    const order = await strapi.services.order.create({
        ...ctx.request.body,
        "status":"unpaid",
        "user":user
      });
    
      delete order.user;

      return order;

    },
};
