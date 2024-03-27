let signs = [
  {'image': 'images/UK_traffic_sign_543.svg', 'name': 'Traffic signals ahead'},
  {
    'image': 'images/Cyprus_warning_road_sign_crossroads.svg',
    'name': 'Crossroads'
  },
  {'image': 'images/UK_traffic_sign_505.1_(left).svg', 'name': 'T-junction'},
  {
    'image': 'images/UK_traffic_sign_506.1_(variant_1,_right).svg',
    'name': 'Side road'
  },
  {
    'image': 'images/UK_traffic_sign_507.1_(variant_1,_right).svg',
    'name': 'Staggered junction'
  },
  {
    'image': 'images/UK_traffic_sign_508.1.svg',
    'name': 'Traffic merges from the left'
  },
  {
    'image': 'images/UK_traffic_sign_509.1.svg',
    'name': 'Traffic merges onto the main carriageway'
  },
  {'image': 'images/UK_traffic_sign_510.svg', 'name': 'Roundabout'},
  {
    'image': 'images/UK_traffic_sign_512_(right).svg',
    'name': 'Bend to right (left if reversed)'
  },
  {
    'image': 'images/UK_traffic_sign_513_(left).svg',
    'name': 'Double bend first to the left (right if reversed)'
  },
  {
    'image': 'images/UK_traffic_sign_512.1_(right).svg',
    'name': 'Junction on a bend (may be reversed)'
  },
  {
    'image': 'images/UK_traffic_sign_512.2_(right).svg',
    'name': 'Junction on a bend (may be reversed)'
  },
  {
    'image': 'images/UK_traffic_sign_516.svg',
    'name': 'Road narrows on both sides'
  },
  {
    'image': 'images/UK_traffic_sign_517_(right).svg',
    'name': 'Road narrows on the right (left if reversed)'
  },
  {
    'image': 'images/UK_traffic_sign_520.svg',
    'name': 'End of dual carriageway'
  },
  {'image': 'images/UK_traffic_sign_521.svg', 'name': 'Two-way traffic'},
  {
    'image': 'images/UK_traffic_sign_522.svg',
    'name': 'Two-way traffic on route crossing ahead'
  },
  {'image': 'images/UK_traffic_sign_523.1.svg', 'name': 'Steep descent'},
  {'image': 'images/UK_traffic_sign_524.1.svg', 'name': 'Steep ascent'},
  {
    'image': 'images/UK_traffic_sign_529.svg',
    'name': 'Opening or swing bridge'
  },
  {'image': 'images/UK_traffic_sign_555.svg', 'name': 'Riverbank or quayside'},
  {
    'image': 'images/UK_traffic_sign_555.1.svg',
    'name': 'Water course alongside road'
  },
  {'image': 'images/UK_traffic_sign_556.1.svg', 'name': 'Soft verges'},
  {
    'image': 'images/Cyprus_warning_road_sign_friable_street.svg',
    'name': 'Soft verges'
  },
  {'image': 'images/UK_traffic_sign_529.1.svg', 'name': 'Tunnel'},
  {'image': 'images/UK_traffic_sign_528.svg', 'name': 'Hump bridge'},
  {'image': 'images/UK_traffic_sign_556.svg', 'name': 'Uneven road'},
  {'image': 'images/UK_traffic_sign_557.svg', 'name': 'Slippery road'},
  {'image': 'images/UK_traffic_sign_581.svg', 'name': 'Side winds'},
  {
    'image': 'images/UK_traffic_sign_558.svg',
    'name': 'Low-flying aircraft or sudden aircraft noise'
  },
  {
    'image': 'images/UK_traffic_sign_558.1.svg',
    'name': 'Low-flying helicopters or sudden helicopter noise'
  },
  {
    'image': 'images/UK_traffic_sign_559_(left).svg',
    'name': 'Falling or fallen rocks'
  },
  {
    'image': 'images/UK_traffic_sign_584.svg',
    'name': 'Traffic queues likely ahead'
  },
  {
    'image': 'images/UK_traffic_sign_582.svg',
    'name': 'Slow-moving military vehicles likely to be in or crossing the road'
  },
  {'image': 'images/UK_traffic_sign_583.svg', 'name': 'Slow-moving vehicles'},
  {'image': 'images/UK_traffic_sign_554.2.svg', 'name': 'Ice or Snowdrifts'},
  {
    'image': 'images/UK_traffic_sign_562.svg',
    'name': 'Other dangers (must be used to indicate the hazard)'
  },
  {'image': 'images/UK_traffic_sign_544.svg', 'name': 'Zebra crossing'},
  {'image': 'images/UK_traffic_sign_544.1.svg', 'name': 'Pedestrians ahead'},
  {
    'image': 'images/UK_traffic_sign_544.2.svg',
    'name': 'Frail/blind/disabled pedestrians likely to cross'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_child.svg',
    'name': 'Children going to or from school'
  },
  {
    'image': 'images/UK_traffic_sign_550.2.svg',
    'name': 'Horse-drawn vehicleslikely to be in the road'
  },
  {
    'image': 'images/UK_traffic_sign_550.1.svg',
    'name': 'Accompanied horses or ponies likely to be in or crossing the road'
  },
  {'image': 'images/UK_traffic_sign_550.svg', 'name': 'Wild horsesor ponies'},
  {'image': 'images/UK_traffic_sign_551.svg', 'name': 'Wild animals'},
  {
    'image': 'images/UK_traffic_sign_553.1.svg',
    'name': 'Agricultural vehicles'
  },
  {'image': 'images/UK_traffic_sign_548.svg', 'name': 'Cattle'},
  {'image': 'images/UK_traffic_sign_772.svg', 'name': 'Tramway'},
  {
    'image': 'images/Cyprus_warning_road_sign_give_way_ahead.svg',
    'name': 'Give way ahead'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_stop_ahead.svg',
    'name': 'Stop ahead'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_distance_to_level_crossing.svg',
    'name': 'Distance to level crossing'
  },
  {'image': 'images/Cyprus_road_sign_obstacle.svg', 'name': 'Obstacle'},
  {
    'image': 'images/Cyprus_warning_road_sign_obstacle_left.svg',
    'name': 'Obstacle left'
  },
  {
    'image': 'images/Cyprus_warning_road_sign_obstacle_right.svg',
    'name': 'Obstacle right'
  },
  {
    'image': 'images/Cyprus_road_sign_no_hand_vehicles.svg',
    'name': 'No hand vehicles'
  },
  {
    'image': 'images/Cyprus_road_sign_no_motorcycles.svg',
    'name': 'No motorcycles'
  },
  {'image': 'images/Cyprus_road_sign_no_mopeds.svg', 'name': 'No mopeds'},
  {
    'image': 'images/Cyprus_road_sign_no_motor_vehicles.svg',
    'name': 'No motor vehicles'
  },
  {
    'image': 'images/Cyprus_road_sign_no_agricle_vehicles.svg',
    'name': 'No agricle vehicles'
  },
  {
    'image': 'images/Cyprus_road_sign_no_animal_vehicles.svg',
    'name': 'No animal-drawn vehicles'
  },
  {'image': 'images/Cyprus_road_sign_toll_post.svg', 'name': 'Toll post'},
  {'image': 'images/Cyprus_road_sign_no_horn.svg', 'name': 'No horn'},
  {'image': 'images/Cyprus_road_sign_customs.svg', 'name': 'Customs'},
  {
    'image': 'images/Cyprus_road_sign_minimum_distance.svg',
    'name': 'Minimum distance'
  },
  {
    'image': 'images/UK_traffic_sign_619.svg',
    'name': 'No motor vehicles (both car and motorcycle)'
  },
  {
    'image': 'images/UK_traffic_sign_811.svg',
    'name': 'Traffic has priority over vehicles from the opposite direction'
  },
  {
    'image': 'images/UK_traffic_sign_617.svg',
    'name': 'Road closed to all vehicles in both directions'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_large.svg',
    'name': 'No vehicles exceeding width on the sign'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_height.svg',
    'name': 'No vehicles exceeding height on the sign'
  },
  {
    'image': 'images/UK_traffic_sign_622.1A.svg',
    'name': 'No goods vehicles exceeding weight on the sign'
  },
  {
    'image': 'images/Cyprus_road_sign_no_heavy_vehicles.svg',
    'name': 'No goods veicles'
  },
  {'image': 'images/UK_traffic_sign_622.7.svg', 'name': 'No towed caravans'},
  {
    'image': 'images/UK_traffic_sign_616.svg',
    'name': 'No Entryfor vehicular traffic'
  },
  {
    'image': 'images/UK_traffic_sign_612.svg',
    'name': 'No right turn for vehicular traffic'
  },
  {
    'image': 'images/UK_traffic_sign_613.svg',
    'name': 'No left turn for vehicular traffic'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_speed.svg',
    'name': 'Maximum speed limit'
  },
  {
    'image': 'images/Cyprus_road_sign_end_maximum_speed.svg',
    'name': 'End of maximum speed limit'
  },
  {
    'image': 'images/UK_traffic_sign_615.svg',
    'name': 'Priority must be given to vehicles from the opposite direction'
  },
  {'image': 'images/UK_traffic_sign_632.svg', 'name': 'Noovertaking'},
  {
    'image': 'images/Cyprus_road_sign_end_no_overpass.svg',
    'name': 'End of no overtaking'
  },
  {
    'image': 'images/Cyprus_road_sign_no_overpass_heavy_vehicles.svg',
    'name': 'No overtaking by vehicles'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_single_weight.svg',
    'name': 'Maximum single weight'
  },
  {
    'image': 'images/UK_traffic_sign_671.svg',
    'name': 'End of all local bans on moving vehicles'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_lenght.svg',
    'name': 'Maximum length'
  },
  {
    'image': 'images/Cyprus_road_sign_no_water_heavy_vehicles.svg',
    'name': 'No water heavy vehicles'
  },
  {
    'image': 'images/Cyprus_road_sign_maximum_heavy.svg',
    'name': 'Maximum heavy'
  },
  {
    'image': 'images/UK_traffic_sign_622.8.svg',
    'name': 'Vehicles carrying explosives (such as fireworks) prohibited.'
  },
  {
    'image': 'images/UK_traffic_sign_614.svg',
    'name': 'No U-turns for vehicular traffic'
  },
  {'image': 'images/Cyprus_road_sign_police.svg', 'name': 'Police'},
  {'image': 'images/Cyprus_road_sign_-_STOP.svg', 'name': 'Stop sign'},
  {
    'image': 'images/Cyprus_road_sign_priority_road.svg',
    'name': 'Priority road'
  },
  {
    'image': 'images/Cyprus_road_sign_end_priority_road.svg',
    'name': 'End of priority road'
  },
  {
    'image': 'images/UK_traffic_sign_605.2.svg',
    'name': 'Stop, crossroads by children'
  },
  {
    'image': 'images/UK_traffic_sign_7024.svg',
    'name': 'Go ahead or proceed for temporary road works using a hand sign'
  },
  {'image': 'images/Cyprus_road_sign_give_way.svg', 'name': 'Give way'},
  {
    'image': 'images/Cyprus_road_sign_cross_guided.svg',
    'name':
        'Controlled block stopping is prohibited except when waiting for a right turn'
  },
  {'image': 'images/UK_traffic_sign_636.svg', 'name': 'No parking'},
  {'image': 'images/UK_traffic_sign_642.svg', 'name': 'No stopping'},
  {
    'image': 'images/Cyprus_road_sign_no_park_impares.svg',
    'name': 'No parking on odd days'
  },
  {
    'image': 'images/Cyprus_road_sign_no_park_pares.svg',
    'name': 'No parking on even days'
  },
  {
    'image': 'images/Cyprus_road_sign_no_parking_zone.svg',
    'name': 'No parking zone'
  },
  {
    'image': 'images/Cyprus_road_sign_end_no_parking_zone.svg',
    'name': 'End of no parking zone'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_go_streight.svg',
    'name': 'Go straight ahead only'
  },
  {'image': 'images/UK_traffic_sign_606_(left).svg', 'name': 'Turn left'},
  {'image': 'images/UK_traffic_sign_606_(right).svg', 'name': 'Turn right'},
  {'image': 'images/UK_traffic_sign_609_(left).svg', 'name': 'Turn left ahead'},
  {
    'image': 'images/UK_traffic_sign_609_(right).svg',
    'name': 'Turn right ahead'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_go_or_left.svg',
    'name': 'Go straight or turn left ahead'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_go_or_right.svg',
    'name': 'Go straight or turn right ahead'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_left_or_right.svg',
    'name': 'Turn left or right ahead'
  },
  {'image': 'images/UK_traffic_sign_610_(left).svg', 'name': 'Keep left'},
  {'image': 'images/UK_traffic_sign_610_(right).svg', 'name': 'Keep right'},
  {'image': 'images/UK_traffic_sign_611.svg', 'name': 'Pass on either side'},
  {'image': 'images/UK_traffic_sign_611.1.svg', 'name': 'Roundabout'},
  {
    'image': 'images/Cyprus_road_sign_one_way_road.svg',
    'name': 'One-way traffic'
  },
  {
    'image': 'images/Cyprus_road_sign_one_way_lateral_road.svg',
    'name': 'One-way lateral road'
  },
  {'image': 'images/UK_traffic_sign_672.svg', 'name': 'Minimum speed limit'},
  {
    'image': 'images/UK_traffic_sign_673.svg',
    'name': 'End of minimum speed limit'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_chains.svg',
    'name': 'Snow chains mandatory'
  },
  {
    'image': 'images/Cyprus_road_sign_horse_street.svg',
    'name': 'Horse street mandatory'
  },
  {
    'image': 'images/Cyprus_road_sign_mandatory_pedestrian_way.svg',
    'name': 'Pedestrian road mandatory'
  },
  {
    'image': 'images/Cyprus_road_sign_road_bump_50.svg',
    'name': 'Curving road surface, the speed limit is set at 50 km/h'
  },
  {
    'image': 'images/Cyprus_road_sign_road_bump_30.svg',
    'name': 'Curving road surface, the speed limit is set at 30 km/h'
  },
  {
    'image': 'images/Cyprus_road_sign_humped_crossing.svg',
    'name': 'Humped crossing'
  },
  {
    'image': 'images/Cyprus_road_sign_humped_pellcan_crossing.svg',
    'name': 'Humped pellcan crossing'
  },
  {'image': 'images/Cyprus_road_sign_school.svg', 'name': 'School'},
  {
    'image': 'images/Cyprus_road_sign_road_humps_left.svg',
    'name': 'Road humps left'
  },
  {
    'image': 'images/Cyprus_road_sign_road_humps_right.svg',
    'name': 'Road humps right'
  },
  {'image': 'images/Cyprus_road_sign_road_humps.svg', 'name': 'Road humps'},
  {
    'image': 'images/Cyprus_road_sign_next_destinations.svg',
    'name': 'Confirmation sign'
  },
  {
    'image': 'images/Cyprus_road_sign_destinations_road_crossing.svg',
    'name': 'Direction sign'
  },
  {
    'image': 'images/Cyprus_road_sign_destinations_white.svg',
    'name': 'Direction sign'
  },
  {
    'image': 'images/Cyprus_road_sign_destinations_blue.svg',
    'name': 'Direction sign'
  },
  {'image': 'images/Cyprus_road_sign_bus_stop.svg', 'name': 'Bus stop'},
  {
    'image': 'images/Cyprus_road_sign_pedonal_crossing.svg',
    'name': 'Pedestrian crossing'
  },
  {'image': 'images/Cyprus_road_sign_parking.svg', 'name': 'Parking'},
  {
    'image': 'images/Cyprus_road_sign_cul_de_sac.svg',
    'name': 'Dead end straight ahead'
  },
  {
    'image': 'images/Cyprus_road_sign_cul_de_sac_ahead_left.svg',
    'name': 'Dead end left'
  },
  {
    'image': 'images/Cyprus_road_sign_cul_de_sac_ahead_right.svg',
    'name': 'Dead end right'
  },
  {'image': 'images/Cyprus_road_sign_SOS.svg', 'name': 'Emergency phone'},
  {
    'image': 'images/Cyprus_road_sign_road_for_motorvehicles.svg',
    'name': 'Express road'
  },
  {
    'image': 'images/Cyprus_road_sign_end_road_for_motorvehicles.svg',
    'name': 'End of expressway'
  },
  {
    'image': 'images/Cyprus_road_sign_transitability.svg',
    'name': 'Open road (Only for vehicles with snow chains)'
  },
  {
    'image': 'images/Cyprus_road_sign_drive_on_the_left.svg',
    'name': 'Warning for driving on the left'
  },
  {
    'image': 'images/Cyprus_road_sign_vehicles_exit.svg',
    'name': 'Vehicle exit'
  },
  {
    'image': 'images/Cyprus_road_sign_general_limits.svg',
    'name': 'General speed limits'
  },
  {
    'image': 'images/Cyprus_road_sign_roundabound_destinations.svg',
    'name': 'Direction sign at a roundabout'
  },
  {'image': 'images/Cyprus_road_sign_confirm.svg', 'name': 'Confirmation sign'},
  {
    'image': 'images/Vienna_Convention_road_sign_H7-V1-1.svg',
    'name': 'Allowed only for disabled vehicles'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H4a-V1-1.svg',
    'name':
        'A no stop and parking sign placed perpendicular to the axis of the street'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H4b-V1-1.svg',
    'name':
        'Repetition of a no stop and parking sign placed perpendicular to the axis of the street'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H4c-V1-1.svg',
    'name':
        'End of a no stop and parking sign placed perpendicular to the axis of the street'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H1-V1-1.svg',
    'name': 'Distance from the sign to the signed area'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H2-V1-1.svg',
    'name': 'Length of the hazardous section of prohibition or restriction area'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H3a-V1-1.svg',
    'name':
        'A no stop and parking sign from the position of the sign and in the direction of the arrow'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H3b-V1-1.svg',
    'name':
        'Reminder of a no stop and parking sign placed parallel to the axis of the street'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H9-V1-1.svg',
    'name': 'Icy road'
  },
  {
    'image': 'images/Vienna_Convention_road_sign_H8b-V1-1.svg',
    'name': 'Direction of priority road'
  },
  {
    'image': 'images/City_speed_limit_sign_in_Polis,_Cyprus.svg',
    'name': 'Entering a residential area - The speed is limited'
  },
  {'image': 'images/Highway_begin_in_Cyprus.png', 'name': 'Highway'},
  {
    'image': 'images/Informational_sign_on_a_motorway_in_Cyprus.svg',
    'name': 'Highway exit warning'
  },
  {'image': 'images/Motorway_exit_sign_in_Cyprus.png', 'name': 'Motorway exit'},
  {'image': 'images/UK_traffic_sign_955.svg', 'name': 'Cycle lane'},
  {
    'image': 'images/UK_traffic_sign_957.svg',
    'name': 'Cycle path separated from pedestrian path'
  },
  {
    'image': 'images/UK_traffic_sign_957R.svg',
    'name': 'Cycle path separated from pedestrian path (alternative)'
  },
  {
    'image': 'images/UK_traffic_sign_956.svg',
    'name': 'Road shared by cyclists and pedestrians'
  },
  {
    'image': 'images/UK_traffic_sign_953.svg',
    'name': 'Road shared by bicycles and buses'
  },
  {'image': 'images/UK_traffic_sign_951.svg', 'name': 'No bicycles allowed'},
  {
    'image': 'images/UK_traffic_sign_950.svg',
    'name': 'Road with special measures for cyclists'
  },
  {'image': 'images/UK_traffic_sign_879.svg', 'name': 'Speed camera'},
  {
    'image': 'images/Roundabout_road_sign_in_Cyprus1.svg',
    'name':
        'Roundabout sign leading to population centres and the Turkish-occupied areas'
  },
  {
    'image': 'images/Warning_sign_in_Cyprus.png',
    'name': 'Stop — Turkish occupied area'
  }
]