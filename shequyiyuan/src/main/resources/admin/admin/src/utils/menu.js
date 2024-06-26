const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"病例信息管理",
                        "menuJump":"列表",
                        "tableName":"bingli"
                    }
                ],
                "menu":"病例信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"档案单位管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiuankangdangan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"科室管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryKeshi"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"家庭医生管理",
                        "menuJump":"列表",
                        "tableName":"jiatingyisheng"
                    }
                ],
                "menu":"家庭医生管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"健康档案管理",
                        "menuJump":"列表",
                        "tableName":"jiuankangdangan"
                    }
                ],
                "menu":"健康档案管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"就诊信息管理",
                        "menuJump":"列表",
                        "tableName":"jiuzhen"
                    }
                ],
                "menu":"就诊信息管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"前台管理",
                        "menuJump":"列表",
                        "tableName":"qiantai"
                    }
                ],
                "menu":"前台管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"药品管理",
                        "menuJump":"列表",
                        "tableName":"yaopin"
                    }
                ],
                "menu":"药品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"医生管理",
                        "menuJump":"列表",
                        "tableName":"yisheng"
                    }
                ],
                "menu":"医生管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"病例信息管理",
	                    "menuJump":"列表",
	                    "tableName":"bingli"
	                }
	            ],
	            "menu":"病例信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"家庭医生管理",
	                    "menuJump":"列表",
	                    "tableName":"jiatingyisheng"
	                }
	            ],
	            "menu":"家庭医生管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"健康档案管理",
	                    "menuJump":"列表",
	                    "tableName":"jiuankangdangan"
	                }
	            ],
	            "menu":"健康档案管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"就诊信息管理",
	                    "menuJump":"列表",
	                    "tableName":"jiuzhen"
	                }
	            ],
	            "menu":"就诊信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"药品管理",
	                    "menuJump":"列表",
	                    "tableName":"yaopin"
	                }
	            ],
	            "menu":"药品管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"病例信息管理",
	                    "menuJump":"列表",
	                    "tableName":"bingli"
	                }
	            ],
	            "menu":"病例信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"健康档案管理",
	                    "menuJump":"列表",
	                    "tableName":"jiuankangdangan"
	                }
	            ],
	            "menu":"健康档案管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"就诊信息管理",
	                    "menuJump":"列表",
	                    "tableName":"jiuzhen"
	                }
	            ],
	            "menu":"就诊信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"药品管理",
	                    "menuJump":"列表",
	                    "tableName":"yaopin"
	                }
	            ],
	            "menu":"药品管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"医生",
	    "tableName":"yisheng"
	},
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"病例信息管理",
	                    "menuJump":"列表",
	                    "tableName":"bingli"
	                }
	            ],
	            "menu":"病例信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"健康档案管理",
	                    "menuJump":"列表",
	                    "tableName":"jiuankangdangan"
	                }
	            ],
	            "menu":"健康档案管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"就诊信息管理",
	                    "menuJump":"列表",
	                    "tableName":"jiuzhen"
	                }
	            ],
	            "menu":"就诊信息管理"
	        }
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"药品管理",
	                    "menuJump":"列表",
	                    "tableName":"yaopin"
	                }
	            ],
	            "menu":"药品管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"前台",
	    "tableName":"qiantai"
	},
	
]
    }
}
export default menu;
