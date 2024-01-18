-- this will set the db role as a user and 
-- attempt to pull 1 row from each restricted projectkey
set role %%test_role%%;
(
	select * from public_test."dataGap"
	where "ProjectKey" LIKE '%NDOW%' limit 1
)
	UNION
(
		select * from public_test."dataGap"
	where "ProjectKey" LIKE '%NWERN%' AND "FormDate" > '2022-01-01' limit 1
	)
	UNION
	(
		select * from public_test."dataGap"
	where "ProjectKey" LIKE '%Jornada%' limit 1
	)
	UNION
	(
		select * from public_test."dataGap"
	where "ProjectKey" LIKE '%BLM%' limit 1
	)
	UNION
	(
		select * from public_test."dataGap"
	where "ProjectKey" LIKE '%CRNG%' limit 1
	);