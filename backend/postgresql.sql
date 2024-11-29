-- Table: public.customers

-- DROP TABLE public.customers;

CREATE TABLE public.customers
(
    id integer NOT NULL DEFAULT nextval('customers_id_seq'::regclass),
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    phone_number character varying(15) COLLATE pg_catalog."default" NOT NULL,
    address character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    country character varying(50) COLLATE pg_catalog."default" NOT NULL,
    subcity character varying(50) COLLATE pg_catalog."default" NOT NULL,
    kebele character varying(50) COLLATE pg_catalog."default" NOT NULL,
    role character varying(20) COLLATE pg_catalog."default" NOT NULL,
    phobia text COLLATE pg_catalog."default",
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT customers_pkey PRIMARY KEY (id),
    CONSTRAINT customers_email_key UNIQUE (email)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.customers
    OWNER to postgres;










/////////////
-- Table: public.orders

-- DROP TABLE public.orders;

CREATE TABLE public.orders
(
    id integer NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    pizza_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    toppings text[] COLLATE pg_catalog."default",
    status character varying(50) COLLATE pg_catalog."default",
    customer_id integer,
    pizza_id integer,
    CONSTRAINT orders_pkey PRIMARY KEY (id),
    CONSTRAINT fk_customer FOREIGN KEY (customer_id)
        REFERENCES public.customers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_pizza FOREIGN KEY (pizza_id)
        REFERENCES public.pizzas (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.orders
    OWNER to postgres;


/////////////////////


-- Table: public.pizzas

-- DROP TABLE public.pizzas;

CREATE TABLE public.pizzas
(
    id integer NOT NULL DEFAULT nextval('pizzas_id_seq'::regclass),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    toppings text[] COLLATE pg_catalog."default" NOT NULL,
    price numeric(10,2) NOT NULL,
    CONSTRAINT pizzas_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.pizzas
    OWNER to postgres;

///////////////////////////


-- Table: public.staffs

-- DROP TABLE public.staffs;

CREATE TABLE public.staffs
(
    id integer NOT NULL DEFAULT nextval('staffs_id_seq'::regclass),
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    phone character varying(15) COLLATE pg_catalog."default" NOT NULL,
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    password character varying(255) COLLATE pg_catalog."default" NOT NULL,
    role character varying(50) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT staffs_pkey PRIMARY KEY (id),
    CONSTRAINT staffs_email_key UNIQUE (email)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.staffs
    OWNER to postgres;














order
36	kebede@gmail.com	ddd	2024-09-30 09:23:20.387595	{ok}	queued	5	6
40	kebede@gmail.com	choose	2024-09-30 09:23:20.653307	{}	queued	5	10
42	kebede@gmail.com	zod	2024-09-30 09:23:20.686558	{zod}	queued	5	5
43	kebede@gmail.com	choose	2024-09-30 09:23:20.687095	{f}	queued	5	10
44	kebede@gmail.com	choose	2024-09-30 09:23:20.687818	{a}	queued	5	10
45	kebede@gmail.com	choose	2024-09-30 09:23:20.688556	{b}	queued	5	10
46	kebede@gmail.com	a	2024-09-30 09:23:20.692	{a}	queued	5	7
37	kebede@gmail.com	soap	2024-09-30 09:23:20.50783	{}	preparing	5	3
39	kebede@gmail.com	to try	2024-09-30 09:23:20.544645	{soap}	delivered	5	1
49	kebede@gmail.com	soap	2024-10-02 16:16:34.254332	{salt}	on_route	5	3
48	demeke@gmail.com	choose	2024-10-01 10:30:12.759851	{f}	on_route	8	10
38	kebede@gmail.com	pizza	2024-09-30 09:23:20.536521	{}	on_route	5	9
50	kebede@gmail.com	soap	2024-11-24 23:06:28.582909	{salt}	queued	5	3
35	kebede@gmail.com	choose	2024-09-30 09:06:57.817245	{c}	preparing	5	10


staff
1	Addisu	Addisu	0900928555	addisuagerie@gmail.com	$2a$10$OQbHQp.4oVYcqHY5CsMSbunLWzkHfljP0z/tWgBozMWy3BbGilIG6	Administrator	2024-09-23 23:37:50.03978
3	Abebe	Abebe	0900928555	abebe@gmail.com	$2a$10$YrLv2HgnnFBVY7VHYS80ee9JnhYkGWKwUdhZr.XZMJ8YxUGKAWz..	Super Chef	2024-09-23 23:48:38.647308
5	Mola	Mola	0900928555	mola@gmail.com	$2a$10$qefhdAfMt0KH4pD0SxujKuLFs/..2pBLhTvp/aOoNRvPXWMesZ5ay	Food Delivery	2024-09-23 23:49:26.505234
6	st	Addisu	0900928555	s@gmail.com	$2a$10$90JwYiSTDSW3rMb4jvTOAuqpxwX5IJIAsmuzHAQAUe9RZ17ckkNaW	Food Delivery	2024-09-24 09:51:48.145589
7	yy	yy	0900928555	yy@gmail.com	$2a$10$O/0rtYCqMiz7Tb5z1hv/mOVa2sdVwcaXOV5XSdq5Cluy0g/vkjLQS	Super Chef	2024-10-02 10:54:26.970769
9	yy	yy	0900928555	yyy@gmail.com	$2a$10$St7d7EZVDIrqIONXqqBNFe/3fXUuK4U3rzp0fJ5jl5dAiqGcOpKZe	Super Chef	2024-10-02 14:24:58.768935
11	totry	hh	0900928555	n@gmail.com	$2a$10$6v0I3CEzLKxmY9.MK3ImTO2Ehf0UqQFxk2dSW5mIpGbwQopvpCduy	Super Chef	2024-10-03 23:57:14.146754
13	b	hh	0900928555	v@gmail.com	$2a$10$EOFfvBeGmBUDtt7z8Pe4Tuto.Wv0lBZM6EZLMnvMknE8PaVprkm.e	Super Chef	2024-10-04 00:07:59.592269


pizaa
1	to try	work work work work work work work work work work work work wor	{soap,soap,soap,soap,soap,soap,""}	44.00
3	soap	aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa	{salt,salt,salt,salt,salt,salt,salt,""}	445.00
4	soap		{salt,salt,salt,salt,salt,salt,salt,""}	77.00
9	pizza	pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza pizza 	{pizza,pizza,pizza,pizza,pizza,pizza,pizza,""}	100.00
10	choose	chose chose chose chose chose chose chose chose chose 	{a,b,c,d,e,f}	99.00
11	injera	injera is sdfhd jdhidgh dgi dh dghdsigkj gkjds d gkdsgdsgkjdsgdskgd gd gdsd gdkg d gdsd d kk kdsg dkg 	{z,x,c,v,b,n,m}	65.00
13	popuppizza	pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop pop 	{a,s,d,f,g,h,j,k}	77.00
5	zod	zdoda zod,zod, a aaaa aaaaaaa aaaaa aaaaaa a a	{zod,zod,zod,zod,zod,zod,zod,zod,zod}	12.00
12	dabo	fod dsfbkjf kjfdk fkdf kdf kd fdkjfdkfn sdkf ndkf dkf dskf dsf ndskf dskf kdskfdsk fdk fdsk fdsk fsdakf sdlfn dlf sdaf	{q,w,e,r,t,y}	98.00
6	ddd	ddddddddddddddddddddddddddddddddddddddd	{ok,ok,ok,ok,ok,ok,ok,ok,""}	565.00
7	a	a	{a}	30.00
8	sdafgdgds	dsgdgdsgds	{salt,salt,salt,salt,salt,salt,salt,""}	11.00
2	to try	work work work work work work work work work work work work wor	{soap,soap,soap,soap,soap,soap,""}	44.00



customer
1	a	a	0000000000	a	shegawyenaw@gmail.com	aa	a	a	customer	a	2024-09-23 22:19:46.56448	
4	a	a	0000000000	a	sheghhawyenaw@gmail.com	eth	ss	a	customer		2024-09-23 23:04:12.615457	$2a$10$Cjxm80GwvVwm9gokIWzl1e90aDHwu014G1t94WmcVvtpJuRFXg3He
5	Kebede	Kebede	0000000000	a	kebede@gmail.com	aa	a	a	customer	a	2024-09-23 23:54:55.666118	$2a$10$VOPcLO.2nf78ZUP/VqsQV.E9llm.0ilEB472sVOts7hdxnfPRXQci
6	usr1	a	0900000000	sfsf	fds@gmail.com	aa	ss	a	customer	a	2024-09-24 10:01:01.151696	$2a$10$Z0CirI0/iVnqGMY1GjYSSOFOQGQw9eq0OdRjxXQWkkQVqHYFFs71u
7	usr2	a	0900000000	sfsf	fdffs@gmail.com	aa	ss	a	customer	a	2024-09-24 10:01:45.228004	$2a$10$DpEJRF3Oa9mUD8kfJ4k/pe4jerdz6ikAaemnR1yPcrRf6kqQhC0mK
8	demeke	belay	0999223344	ethiopia	demeke@gmail.com	Addis Abeba	akaki	01	customer	none	2024-10-01 10:29:13.73256	$2a$10$di.jouBeTQdqvtwSD1ZZIOt4gwN5MeNAUEhSV8V2EWnntlGaCe4hi
9	reg	reg	9999999999	sfsf	reg@gmail.com	Addis Abeba	akaki	01	customer	none	2024-10-02 10:04:37.041337	$2a$10$mPH1ni.2rqMi3CV4pxL9lurvzkCfblDl3t3cetcVbu5v7QlZ6gXtS
10	reg	reg	9999999999	sfsf	reg2@gmail.com	Addis Abeba	akaki	01	customer	none	2024-10-02 10:09:44.947242	$2a$10$vD4MJjIoypgdS1vc14Rem.3UlZi/Dd4CVktRgqc.3HhxLUxmtLtpG
11	user3	reg	9999999999	ethiopia	user4@gmail.com	Addis Abeba	ss	99	customer	none	2024-10-02 10:23:00.811941	$2a$10$a58S0EapJh7BMyq5yHYhv.EkEZF4H.1acds9zyImcg59VtF9BIOaW
