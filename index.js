// Code your solution here:
  function driversWithRevenueOver(drivers, revenue){
      return drivers.filter(function(driver){
        return driver.revenue > revenue
      })
  }

  function driverNamesWithRevenueOver(drivers, revenue){
    let filtered_array = driversWithRevenueOver(drivers, revenue)
    let new_array = filtered_array.map(function(driver){
      return driver.name
    })
    return new_array
  }

  function exactMatch(drivers, obj){
    let object_key = Object.keys(obj)[0]
    let object_value = obj[object_key]

    let new_array = drivers.filter(function (driver){
      return (driver[object_key] === object_value)
    })

    return new_array

  }

  function exactMatchToList(drivers, obj){
    let filtered_list = exactMatch(drivers, obj)

    let new_array = filtered_list.map(function (driver){
      return driver.name;
    })
    return new_array
  }
